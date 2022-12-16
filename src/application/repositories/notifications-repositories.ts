import { Notification } from "../entities/notifications";

export abstract class NotificationRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findeById(notificationID: string): Promise<Notification | null>;
    abstract save(notification: Notification): Promise<void>;
    abstract countManyByRecipientId(recipienteId:string): Promise<number>;
    abstract findManyByRecipientId(recipienteId: string): Promise<Notification[]>;

}