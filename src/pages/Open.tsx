import { useHistory, useParams } from "react-router-dom";

import { Text } from "preact-i18n";
import { useContext, useEffect } from "preact/hooks";

import { useIntermediate } from "../context/intermediate/Intermediate";
import {
    ClientStatus,
    StatusContext,
    useClient,
} from "../context/revoltjs/RevoltClient";

import Header from "../components/ui/Header";

export default function Open() {
    const history = useHistory();
    const client = useClient();
    const status = useContext(StatusContext);
    const { id } = useParams<{ id: string }>();
    const { openScreen } = useIntermediate();

    if (status !== ClientStatus.ONLINE) {
        return (
            <Header placement="primary">
                <Text id="general.loading" />
            </Header>
        );
    }

    useEffect(() => {
        if (id === "saved") {
            for (const channel of client.channels.toArray()) {
                if (channel?.channel_type === "SavedMessages") {
                    history.push(`/channel/${channel._id}`);
                    return;
                }
            }

            client.users
                .openDM(client.user?._id as string)
                .then((channel) => history.push(`/channel/${channel?._id}`))
                .catch((error) => openScreen({ id: "error", error }));

            return;
        }

        const user = client.users.get(id);
        if (user) {
            const channel: string | undefined = client.channels
                .toArray()
                .find(
                    (channel) =>
                        channel?.channel_type === "DirectMessage" &&
                        channel.recipients.includes(id),
                )?._id;

            if (channel) {
                history.push(`/channel/${channel}`);
            } else {
                client.users
                    .openDM(id)
                    .then((channel) => history.push(`/channel/${channel?._id}`))
                    .catch((error) => openScreen({ id: "error", error }));
            }

            return;
        }

        history.push("/");
    }, []);

    return (
        <Header placement="primary">
            <Text id="general.loading" />
        </Header>
    );
}
