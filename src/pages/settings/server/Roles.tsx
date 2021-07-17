import { Plus } from "@styled-icons/boxicons-regular";
import isEqual from "lodash.isequal";
import { Servers } from "revolt.js/dist/api/objects";
import {
    ChannelPermission,
    ServerPermission,
} from "revolt.js/dist/api/permissions";

import styles from "./Panes.module.scss";
import { Text } from "preact-i18n";
import { useContext, useEffect, useState } from "preact/hooks";

import { useIntermediate } from "../../../context/intermediate/Intermediate";
import { AppContext } from "../../../context/revoltjs/RevoltClient";
import { useData } from "../../../context/revoltjs/hooks";

import Button from "../../../components/ui/Button";
import Checkbox from "../../../components/ui/Checkbox";
import ColourSwatches from "../../../components/ui/ColourSwatches";
import IconButton from "../../../components/ui/IconButton";
import InputBox from "../../../components/ui/InputBox";
import Overline from "../../../components/ui/Overline";
import Tip from "../../../components/ui/Tip";

import ButtonItem from "../../../components/navigation/items/ButtonItem";

interface Props {
    server: string;
}

const I32ToU32 = (arr: number[]) => arr.map((x) => x >>> 0);

// ! FIXME: bad code :)
export function Roles({ server: server_id }: Props) {
    const [role, setRole] = useState("default");
    const { openScreen } = useIntermediate();
    const client = useContext(AppContext);
    const { roles, default_permissions } = useData(
        (client) => {
            const server = client.servers.get(server_id);

            return {
                roles: server?.roles ?? {},
                default_permissions: server?.default_permissions ?? [0, 0],
            };
        },
        [{ key: "servers" }],
    );

    if (role !== "default" && typeof roles[role] === "undefined") {
        useEffect(() => setRole("default"));
        return null;
    }

    function getPermissions(id: string) {
        return I32ToU32(
            id === "default" ? default_permissions : roles[id].permissions,
        );
    }

    const { name: roleName, colour: roleColour } = roles[role] ?? {};

    const [perm, setPerm] = useState(getPermissions(role));
    const [name, setName] = useState(roleName);
    const [colour, setColour] = useState(roleColour);

    useEffect(
        () => setPerm(getPermissions(role)),
        [role, roles[role]?.permissions],
    );

    useEffect(() => setName(roleName), [role, roleName]);
    useEffect(() => setColour(roleColour), [role, roleColour]);

    const modified =
        !isEqual(perm, getPermissions(role)) ||
        !isEqual(name, roleName) ||
        !isEqual(colour, roleColour);

    const save = () => {
        if (!isEqual(perm, getPermissions(role))) {
            client.servers.setPermissions(server_id, role, {
                server: perm[0],
                channel: perm[1],
            });
        }

        if (!isEqual(name, roleName) || !isEqual(colour, roleColour)) {
            client.servers.editRole(server_id, role, { name, colour });
        }
    };

    const deleteRole = () => {
        setRole("default");
        client.servers.deleteRole(server_id, role);
    };

    return (
        <div className={styles.roles}>
            <div className={styles.list}>
                <div className={styles.title}>
                    <h1>
                        <Text id="app.settings.server_pages.roles.title" />
                    </h1>
                    <Plus
                        size={22}
                        onClick={() =>
                            openScreen({
                                id: "special_input",
                                type: "create_role",
                                server: server_id,
                                callback: (id) => setRole(id),
                            })
                        }
                    />
                </div>
                {["default", ...Object.keys(roles)].map((id) => {
                    if (id === "default") {
                        return (
                            <ButtonItem
                                active={role === "default"}
                                onClick={() => setRole("default")}>
                                <Text id="app.settings.permissions.default_role" />
                            </ButtonItem>
                        );
                    }
                    return (
                        <ButtonItem
                            active={role === id}
                            onClick={() => setRole(id)}
                            style={{ color: roles[id].colour }}>
                            {roles[id].name}
                        </ButtonItem>
                    );
                })}
            </div>
            <div className={styles.permissions}>
                <div className={styles.title}>
                    <h2>
                        {role === "default" ? (
                            <Text id="app.settings.permissions.default_role" />
                        ) : (
                            roles[role].name
                        )}
                    </h2>
                    <Button contrast disabled={!modified} onClick={save}>
                        Save
                    </Button>
                </div>
                {role !== "default" && (
                    <>
                        <section>
                            <Overline type="subtle">Role Name</Overline>
                            <p>
                                <InputBox
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.currentTarget.value)
                                    }
                                    contrast
                                />
                            </p>
                        </section>
                        <section>
                            <Overline type="subtle">Role Colour</Overline>
                            <p>
                                <ColourSwatches
                                    value={colour ?? "gray"}
                                    onChange={(value) => setColour(value)}
                                />
                            </p>
                        </section>
                    </>
                )}
                <section>
                    <Overline type="subtle">
                        <Text id="app.settings.permissions.server" />
                    </Overline>
                    {Object.keys(ServerPermission).map((key) => {
                        if (key === "View") return;
                        const value =
                            ServerPermission[
                                key as keyof typeof ServerPermission
                            ];

                        return (
                            <Checkbox
                                checked={(perm[0] & value) > 0}
                                onChange={() =>
                                    setPerm([perm[0] ^ value, perm[1]])
                                }
                                description={
                                    <Text id={`permissions.server.${key}.d`} />
                                }>
                                <Text id={`permissions.server.${key}.t`} />
                            </Checkbox>
                        );
                    })}
                </section>
                <section>
                    <Overline type="subtle">
                        <Text id="app.settings.permissions.channel" />
                    </Overline>
                    {Object.keys(ChannelPermission).map((key) => {
                        if (key === "ManageChannel") return;
                        const value =
                            ChannelPermission[
                                key as keyof typeof ChannelPermission
                            ];

                        return (
                            <Checkbox
                                checked={((perm[1] >>> 0) & value) > 0}
                                onChange={() =>
                                    setPerm([perm[0], perm[1] ^ value])
                                }
                                disabled={key === "View"}
                                description={
                                    <Text id={`permissions.channel.${key}.d`} />
                                }>
                                <Text id={`permissions.channel.${key}.t`} />
                            </Checkbox>
                        );
                    })}
                </section>
                <div className={styles.actions}>
                    <Button contrast disabled={!modified} onClick={save}>
                        Save
                    </Button>
                    {role !== "default" && (
                        <Button contrast error onClick={deleteRole}>
                            Delete
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
