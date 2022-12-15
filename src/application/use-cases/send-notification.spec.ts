import { InMemoryNotificationRepositories } from './../../../test/repositories/in-memory-notifications';
import { Notification } from '../entities/notifications';
import { SendNotification } from './send-notification';



describe('Send Notification', () => {
    it('should be able to send notification', async () => {
        const notificationsRepository = new InMemoryNotificationRepositories;
        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'Social',
            recipienteId: 'expample-recipiante-id',
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);

    })
})