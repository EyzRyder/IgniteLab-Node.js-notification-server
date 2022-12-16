import { Notification } from '@application/entities/notifications';
import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notifications-repositories';

interface GetRecipientNotificationsRequest {
    recipienteId: string;
}

interface GetRecipientNotificationsResponse {
    notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {

    constructor(
        private notificationRepository: NotificationRepository
    ) { }

    async execute(
        request: GetRecipientNotificationsRequest,
    ): Promise<GetRecipientNotificationsResponse> {
        const { recipienteId } = request;

        const notifications =
            await this.notificationRepository.findManyByRecipientId(recipienteId);

        return {
            notifications,
        };
    }
}