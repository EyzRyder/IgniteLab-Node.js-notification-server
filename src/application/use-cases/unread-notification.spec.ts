import { UnreadNotification } from './unread-notification';
import { makeNotification } from '@test/factories/notification-factories';
import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationRepositories } from '@test/repositories/in-memory-notifications';

describe('unread Notification', () => {
    it('should be able to unread notification', async () => {
        const notificationsRepository = new InMemoryNotificationRepositories;
        const unreadNotification = new UnreadNotification(notificationsRepository);

        const notification = makeNotification({
            readAt: new Date(),
        });

        await notificationsRepository.create(notification);

        await unreadNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].readAt).toBeNull();

    });

    it('should not be able to unread a non exiting notification ', async () => {
        const notificationsRepository = new InMemoryNotificationRepositories;
        const unreadNotification = new UnreadNotification(notificationsRepository);

        expect(() => {
            return unreadNotification.execute({
                notificationId: 'fake-notification-id'
            });
        }).rejects.toThrow(NotificationNotFound);
    });
});