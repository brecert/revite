import { Redirect, useParams } from "react-router";
import { Channels } from "revolt.js/dist/api/objects";
import styled from "styled-components";

import { attachContextMenu } from "preact-context-menu";
import { useEffect } from "preact/hooks";

import ConditionalLink from "../../../lib/ConditionalLink";
import PaintCounter from "../../../lib/PaintCounter";

import { dispatch } from "../../../redux";
import { connectState } from "../../../redux/connector";
import { Unreads } from "../../../redux/reducers/unreads";

import {
    useChannels,
    useData,
    useForceUpdate,
} from "../../../context/revoltjs/hooks";

import CollapsibleSection from "../../common/CollapsibleSection";
import ServerHeader from "../../common/ServerHeader";
import Category from "../../ui/Category";
import { mapChannelWithUnread, useUnreads } from "./common";

import { ChannelButton } from "../items/ButtonItem";
import ConnectionStatus from "../items/ConnectionStatus";

interface Props {
    unreads: Unreads;
}

const ServerBase = styled.div`
    height: 100%;
    width: 240px;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    background: var(--secondary-background);

    border-start-start-radius: 8px;
    border-end-start-radius: 8px;
    overflow: hidden;
`;

const ServerList = styled.div`
    padding: 6px;
    flex-grow: 1;
    overflow-y: scroll;

    > svg {
        width: 100%;
    }
`;

function ServerSidebar(props: Props) {
    const { server: server_id, channel: channel_id } =
        useParams<{ server: string; channel?: string }>();
    const ctx = useForceUpdate();

    const server = useData(
        (client) => {
            const server = client.servers.get(server_id);
            if (!server) return;

            return {
                channels: server.channels,
                categories: server.categories,
            };
        },
        [{ key: "servers" }],
    );
    if (!server) return <Redirect to="/" />;

    const channels = (
        useChannels(server.channels, ctx).filter(
            (entry) => typeof entry !== "undefined",
        ) as Readonly<Channels.TextChannel | Channels.VoiceChannel>[]
    ).map((x) => mapChannelWithUnread(x, props.unreads));

    const channel = channels.find((x) => x?._id === channel_id);
    if (channel_id && !channel) return <Redirect to={`/server/${server_id}`} />;
    if (channel) useUnreads({ ...props, channel }, ctx);

    useEffect(() => {
        if (!channel_id) return;

        dispatch({
            type: "LAST_OPENED_SET",
            parent: server_id!,
            child: channel_id!,
        });
    }, [channel_id]);

    const uncategorised = new Set(server.channels);
    const elements = [];

    function addChannel(id: string) {
        const entry = channels.find((x) => x._id === id);
        if (!entry) return;

        const active = channel?._id === entry._id;

        return (
            <ConditionalLink
                key={entry._id}
                active={active}
                to={`/server/${server_id}/channel/${entry._id}`}>
                <ChannelButton
                    channel={entry}
                    active={active}
                    alert={entry.unread}
                    compact
                />
            </ConditionalLink>
        );
    }

    if (server.categories) {
        for (const category of server.categories) {
            const channels = [];
            for (const id of category.channels) {
                uncategorised.delete(id);
                channels.push(addChannel(id));
            }

            elements.push(
                <CollapsibleSection
                    id={`category_${category.id}`}
                    defaultValue
                    summary={<Category text={category.title} />}>
                    {channels}
                </CollapsibleSection>,
            );
        }
    }

    for (const id of Array.from(uncategorised).reverse()) {
        elements.unshift(addChannel(id));
    }

    return (
        <ServerBase>
            <ServerHeader server={server_id} ctx={ctx} />
            <ConnectionStatus />
            <ServerList
                onContextMenu={attachContextMenu("Menu", {
                    server_list: server_id,
                })}>
                {elements}
            </ServerList>
            <PaintCounter small />
        </ServerBase>
    );
}

export default connectState(ServerSidebar, (state) => {
    return {
        unreads: state.unreads,
    };
});
