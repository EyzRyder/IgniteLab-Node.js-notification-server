import { Notification } from '@application/entities/notifications';

export class NotificationViewModel {
    static toHttp(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipienteId: notification.recipienteId
        }
    }
}