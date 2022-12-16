import { UnreadNotification } from '@application/use-cases/unread-notification';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notification';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { SendNotification } from '@application/use-cases/send-notification';

import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from '@infra/http/controllers/notifications.controller';


@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification
    ]
})
export class httpModule { }
