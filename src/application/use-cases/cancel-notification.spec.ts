import { makeNotification } from '@test/factories/notification-factories';
import { NotificationNotFound } from './errors/notification-not-found';
import { CancelNotification } from './cancel-notification';
import { InMemoryNotificationRepositories } from '@test/repositories/in-memory-notifications';


describe('Cancel Notification', () => {
    it('should be able to send notification', async () => {
        const notificationsRepository = new InMemoryNotificationRepositories;
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = makeNotification();

        await notificationsRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].cancelAt).toEqual(expect.any(Date));

    });

    it('should not be able to cancel a non exiting notification ', async () => {
        const notificationsRepository = new InMemoryNotificationRepositories;
        const cancelNotification = new CancelNotification(notificationsRepository);

        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-id'
            });
        }).rejects.toThrow(NotificationNotFound);
    });
});