import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { SendNotification } from '@application/use-cases/send-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { NotificationViewModel } from './../view-models/notification-view-model';
import { CreateNotificationBody } from '@infra/http/dtos/create-notification-body';
import { Body, Controller, Post, Param, Patch, Get } from '@nestjs/common';


@Controller("notifications")
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
  ) { }

  @Patch(':id/cancel')
  async cancel(
    @Param('id') id: string
  ) {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }

  @Get('count/from/:recipienteId')
  async countRecipiente(
    @Param('recipienteId') recipienteId: string
  ):Promise<{count:number}> { 
    const {count} = await this.countRecipientNotifications.execute({
      recipienteId: recipienteId,
    }); 

    return {
      count,
    }
  }


  @Get('from/:recipienteId')
  async getFromRecipiente(
    @Param('recipienteId') recipienteId: string
  ) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipienteId: recipienteId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHttp),
    }
  }

  @Patch(':id/read')
  async read(
    @Param('id') id: string
  ) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/unread')
  async unread(
    @Param('id') id: string
  ) {
    await this.unreadNotification.execute({
      notificationId: id,
    });
  }


  @Post()
  async create(
    @Body() body: CreateNotificationBody)
  {
    const { recipienteId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipienteId,
      content,
      category
    });

    return {
      notification: NotificationViewModel.toHttp(notification)
    };
  }

}
