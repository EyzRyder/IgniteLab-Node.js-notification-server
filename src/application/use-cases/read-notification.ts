import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notifications-repositories';

interface ReadNotificationRequest {
    notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {

    constructor(
        private notificationRepository: NotificationRepository
    ) { }

    async execute(
        request: ReadNotificationRequest,
    ): Promise<ReadNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findeById(notificationId);

        if (!notification) { throw new NotificationNotFound(); }

        notification.read();
        await this.notificationRepository.save(notification);

    }

}