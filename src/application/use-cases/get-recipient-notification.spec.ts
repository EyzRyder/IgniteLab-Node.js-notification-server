import { GetRecipientNotifications } from './get-recipient-notification';
import { InMemoryNotificationRepositories } from '@test/repositories/in-memory-notifications';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factories';


describe('Get Recipient Notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationRepositories();
        const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(makeNotification({
            recipienteId: 'recipiente-1'
        }));


        await notificationsRepository.create(makeNotification({
            recipienteId: 'recipiente-1'
        }));


        await notificationsRepository.create(makeNotification({
            recipienteId: 'recipient-2'
        }));

        const { notifications } = await getRecipientNotifications.execute({
            recipienteId: 'recipiente-1'
        });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ recipienteId: 'recipiente-1' }),
                expect.objectContaining({ recipienteId: 'recipiente-1' })
            ]))
    });
});