import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';
import { Notification } from "../entities/notifications";
import { NotificationRepository } from '../repositories/notifications-repositories';

interface CancelNotificationRequest {
    notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {

    constructor(
        private notificationRepository: NotificationRepository
    ) { }

    async execute(
        request: CancelNotificationRequest,
    ): Promise<CancelNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findeById(notificationId);

        if (!notification) { throw new NotificationNotFound(); }

        notification.cancel();
        await this.notificationRepository.save(notification);

    }
}