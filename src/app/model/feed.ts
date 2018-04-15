export class FeedModel {
    source: string;
    channel: Channel;
}

export class Channel {
    title: string;
    link: string;
    description: string;
    category: string;
    language: string;
    items: ChannelItem[];
}

export class ChannelItem {
    title: string;
    link: string;
    description: string;
}