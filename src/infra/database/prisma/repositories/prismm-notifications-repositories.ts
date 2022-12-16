import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '@application/entities/notifications';
import { NotificationRepository } from '@application/repositories/notifications-repositories';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
    constructor(private prisma: PrismaService) { }

    async findeById(notificationID: string): Promise<Notification | null> {
        const notification = await this.prisma.notification.findUnique({
            where: {
                id: notificationID,
            },
        });

        if (!notification) {
            return null;
        }

        return PrismaNotificationMapper.toDomain(notification);
    }

    async findManyByRecipientId(recipienteId: string): Promise<Notification[]> {
        const notifications = await this.prisma.notification.findMany({
            where: {
                recipienteId,
            },
        });

        return notifications.map(PrismaNotificationMapper.toDomain);
    }

    async countManyByRecipientId(recipienteId: string): Promise<number> {
        const count = await this.prisma.notification.count({
            where: {
                recipienteId,
            },
        });

        return count;
    }

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification)

        await this.prisma.notification.create({
            data: raw,
        });
    }

    async save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);

        await this.prisma.notification.update({
            where: {
                id: raw.id,
            },
            data: raw,
        });
    }
}