import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notifications-repositories';

interface CountRecipientNotificationsRequest {
    recipienteId: string;
}

interface CountRecipientNotificationsResponse {
    count: number;
}

@Injectable()
export class CountRecipientNotifications {

    constructor(
        private notificationRepository: NotificationRepository
    ) { }

    async execute(
        request: CountRecipientNotificationsRequest,
    ): Promise<CountRecipientNotificationsResponse> {
        const { recipienteId } = request;

        const count = await this.notificationRepository.countManyByRecipientId(recipienteId);

        return {
            count,
        }
    }
}