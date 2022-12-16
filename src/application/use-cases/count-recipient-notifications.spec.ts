import { InMemoryNotificationRepositories } from '@test/repositories/in-memory-notifications';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factories';


describe('Count Notification', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationRepositories();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(makeNotification({
            recipienteId: 'recipiente-1'
        }));


        await notificationsRepository.create(makeNotification({
            recipienteId: 'recipiente-1'
        }));


        await notificationsRepository.create(makeNotification({
            recipienteId: 'recipient-2'
        }));

        const { count } = await countRecipientNotifications.execute({
            recipienteId: 'recipiente-1'
        });

        expect(count).toEqual(2);

    });
});