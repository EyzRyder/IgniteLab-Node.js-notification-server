import { randomUUID } from 'node:crypto';
import { Replace } from './../../helpers/Replace';
import { Content } from './content';
export interface NotificationProps {
    recipienteId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    created: Date;

}

export class Notification {
    private _id: string;
    private props: NotificationProps;

    constructor(
        props: Replace<NotificationProps, { created?: Date }>) {
        this._id = randomUUID();
        this.props = {
            ...props,
            created: props.created ?? new Date(),
        };
    }

    public get id() {
        return this._id;
    }

    public set recipienteId(recipienteId: string) {
        this.props.recipienteId = recipienteId;
    }

    public get recipienteId(): string {
        return this.props.recipienteId;
    }

    public set content(content: Content) {
        this.props.content = content;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set category(category: string) {
        this.props.category = category;
    }

    public get category(): string {
        return this.props.category;
    }

    public set readAt(readAt: Date | null | undefined) {
        this.props.readAt = readAt;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public set created(created: Date) {
        this.props.created = created;
    }

    public get created(): Date {
        return this.props.created;
    }
}

