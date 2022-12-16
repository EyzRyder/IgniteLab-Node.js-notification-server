import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notifications';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipienteId: notification.recipienteId,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        };
    }

    static toDomain(raw: RawNotification): Notification {
        return new Notification(
            {
                category: raw.category,
                content: new Content(raw.content),
                recipienteId: raw.recipienteId,
                readAt: raw.readAt,
                cancelAt: raw.cancelAt,
                createdAt: raw.createdAt,
            },
            raw.id,
        );
    }
}
