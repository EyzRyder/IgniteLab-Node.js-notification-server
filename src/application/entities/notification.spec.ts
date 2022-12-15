import { Content } from './content';
import { Notification } from './notifications';
describe("Notification", () => {
    it('should be able to create a notification', () => {
        const notification = new Notification(
            {
                content: new Content("Novo solicitação de amizade"),
                category: 'social',
                recipienteId: 'exemple-recipeinet-id'
            }
        );
        expect(notification).toBeTruthy();
    });

});