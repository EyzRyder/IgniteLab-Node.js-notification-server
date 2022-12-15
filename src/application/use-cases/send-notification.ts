import { Injectable } from '@nestjs/common';
import { Content } from './../entities/content';
import { Notification } from "../entities/notifications";
import { NotificationRepository} from '../repositories/notifications-repositories';

interface SendNotificationRequest {
    recipienteId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

@Injectable()
export class SendNotification {

    constructor(
        private notificationRepository:  NotificationRepository 
    ) { }

    async execute(
            request: SendNotificationRequest,
        ): Promise < SendNotificationResponse > {
            const { recipienteId, content, category } = request;

            const notification = new Notification({
                recipienteId,
                content: new Content(content),
                category
            });

        await this.notificationRepository.create(notification);

            return {
                notification
            };
        }
}