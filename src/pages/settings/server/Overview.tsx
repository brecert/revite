import isEqual from "lodash.isequal";
import { Servers, Server } from "revolt.js/dist/api/objects";

import styles from "./Panes.module.scss";
import { Text } from "preact-i18n";
import { useContext, useEffect, useState } from "preact/hooks";

import TextAreaAutoSize from "../../../lib/TextAreaAutoSize";

import { FileUploader } from "../../../context/revoltjs/FileUploads";
import { AppContext } from "../../../context/revoltjs/RevoltClient";
import { useData } from "../../../context/revoltjs/hooks";
import { useChannelName } from "../../../context/revoltjs/util";

import Button from "../../../components/ui/Button";
import ComboBox from "../../../components/ui/ComboBox";
import InputBox from "../../../components/ui/InputBox";

interface Props {
    server: string;
}

export function Overview({ server: server_id }: Props) {
    const client = useContext(AppContext);
    const { server, iconURL, bannerURL } = useData(
        (client) => {
            const server = client.servers.get(server_id)!;
            return {
                server: {
                    name: server.name,
                    description: server.description,
                    system_messages: server.system_messages,
                    channels: server.channels,
                },
                iconURL: client.servers.getIconURL(
                    server_id,
                    { max_side: 256 },
                    true,
                ),
                bannerURL: client.servers.getBannerURL(
                    server_id,
                    { width: 1000 },
                    true,
                ),
            };
        },
        [{ key: "servers" }],
    );

    const [name, setName] = useState(server.name);
    const [description, setDescription] = useState(server.description ?? "");
    const [systemMessages, setSystemMessages] = useState(
        server.system_messages,
    );

    useEffect(() => setName(server.name), [server.name]);
    useEffect(
        () => setDescription(server.description ?? ""),
        [server.description],
    );
    useEffect(
        () => setSystemMessages(server.system_messages),
        [server.system_messages],
    );

    const [changed, setChanged] = useState(false);
    function save() {
        const changes: Partial<
            Pick<Servers.Server, "name" | "description" | "system_messages">
        > = {};
        if (name !== server.name) changes.name = name;
        if (description !== server.description)
            changes.description = description;
        if (!isEqual(systemMessages, server.system_messages))
            changes.system_messages = systemMessages;

        client.servers.edit(server_id, changes);
        setChanged(false);
    }

    return (
        <div className={styles.overview}>
            <div className={styles.row}>
                <FileUploader
                    width={80}
                    height={80}
                    style="icon"
                    fileType="icons"
                    behaviour="upload"
                    maxFileSize={2_500_000}
                    onUpload={(icon) =>
                        client.servers.edit(server_id, { icon })
                    }
                    previewURL={iconURL}
                    remove={() =>
                        client.servers.edit(server_id, { remove: "Icon" })
                    }
                />
                <div className={styles.name}>
                    <h3>
                        <Text id="app.main.servers.name" />
                    </h3>
                    <InputBox
                        contrast
                        value={name}
                        maxLength={32}
                        onChange={(e) => {
                            setName(e.currentTarget.value);
                            if (!changed) setChanged(true);
                        }}
                    />
                </div>
            </div>

            <h3>
                <Text id="app.main.servers.description" />
            </h3>
            <TextAreaAutoSize
                maxRows={10}
                minHeight={60}
                maxLength={1024}
                value={description}
                placeholder={"Add a topic..."}
                onChange={(ev) => {
                    setDescription(ev.currentTarget.value);
                    if (!changed) setChanged(true);
                }}
            />

            <h3>
                <Text id="app.main.servers.custom_banner" />
            </h3>
            <FileUploader
                height={160}
                style="banner"
                fileType="banners"
                behaviour="upload"
                maxFileSize={6_000_000}
                onUpload={(banner) =>
                    client.servers.edit(server_id, { banner })
                }
                previewURL={bannerURL}
                remove={() =>
                    client.servers.edit(server_id, { remove: "Banner" })
                }
            />

            <h3>
                <Text id="app.settings.server_pages.overview.system_messages" />
            </h3>
            {[
                ["User Joined", "user_joined"],
                ["User Left", "user_left"],
                ["User Kicked", "user_kicked"],
                ["User Banned", "user_banned"],
            ].map(([i18n, key]) => (
                // ! FIXME: temporary code just so we can expose the options
                <p
                    style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                    }}>
                    <span style={{ flexShrink: "0", flex: `25%` }}>{i18n}</span>
                    <ComboBox
                        value={
                            systemMessages?.[
                                key as keyof typeof systemMessages
                            ] ?? "disabled"
                        }
                        onChange={(e) => {
                            if (!changed) setChanged(true);
                            const v = e.currentTarget.value;
                            if (v === "disabled") {
                                const {
                                    [key as keyof typeof systemMessages]: _,
                                    ...other
                                } = systemMessages;
                                setSystemMessages(other);
                            } else {
                                setSystemMessages({
                                    ...systemMessages,
                                    [key]: v,
                                });
                            }
                        }}>
                        <option value="disabled">
                            <Text id="general.disabled" />
                        </option>
                        {server.channels.map((id) => {
                            return (
                                <option value={id}>
                                    {useChannelName(id, true)}
                                </option>
                            );
                        })}
                    </ComboBox>
                </p>
            ))}

            <p>
                <Button onClick={save} contrast disabled={!changed}>
                    <Text id="app.special.modals.actions.save" />
                </Button>
            </p>
        </div>
    );
}
