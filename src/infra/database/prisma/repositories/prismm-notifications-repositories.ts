import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from 'src/application/entities/notifications';
import { NotificationRepository } from '../../../../application/repositories/notifications-repositories';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {

    constructor(private prismaService: PrismaService) { }

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipienteId: notification.recipienteId,
                readAt: notification.readAt,
                created: notification.created
            }
        });
    }
}