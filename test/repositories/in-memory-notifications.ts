import { Notification } from "src/application/entities/notifications";
import { NotificationRepository } from "src/application/repositories/notifications-repositories";


export class InMemoryNotificationRepositories implements NotificationRepository {


    public notifications: Notification[] = [];

    async findeById(notificationID: string): Promise<Notification | null> {
        const notification = this.notifications.find((item) => item.id === notificationID);
        if (!notification) { return null; }
        return notification;
    }

    async findManyByRecipientId(recipienteId: string): Promise<Notification[]> {
        return this.notifications.filter((notification) => notification.recipienteId == recipienteId);
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter((notification) => notification.recipienteId == recipientId).length
    }

    async create(notification: Notification) {
        this.notifications.push(notification);
    }

    async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex((item) => item.id === notification.id);
        
        if( notificationIndex >= 0){ this.notifications[notificationIndex]=notification;}
    }
}