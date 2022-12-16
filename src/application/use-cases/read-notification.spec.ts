import { ReadNotification } from './read-notification';
import { makeNotification } from '@test/factories/notification-factories';
import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationRepositories } from '@test/repositories/in-memory-notifications';

describe('Read Notification', () => {
    it('should be able to read notification', async () => {
        const notificationsRepository = new InMemoryNotificationRepositories;
        const readNotification = new ReadNotification(notificationsRepository);

        const notification = makeNotification();

        await notificationsRepository.create(notification);

        await readNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date));

    });

    it('should not be able to read a non exiting notification ', async () => {
        const notificationsRepository = new InMemoryNotificationRepositories;
        const readNotification = new ReadNotification(notificationsRepository);

        expect(() => {
            return readNotification.execute({
                notificationId: 'fake-notification-id'
            });
        }).rejects.toThrow(NotificationNotFound);
    });
});