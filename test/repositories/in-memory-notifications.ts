import { Notification } from "src/application/entities/notifications";
import { NotificationRepository } from "src/application/repositories/notifications-repositories";


export class InMemoryNotificationRepositories implements NotificationRepository {

    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}