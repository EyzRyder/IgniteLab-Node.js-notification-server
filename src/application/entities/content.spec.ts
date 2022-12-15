import { Content } from './content';
describe("Notification content", () => {
    it('should be able to create a notification content', () => {
        const contente = new Content('Voce recebeu uma solicitação de amizade')

        expect(contente).toBeTruthy();
    });

    it('should not be able to create ánotofocation content with less then 5 characters', () => {
        expect(() => new Content('AAA')).toThrow();
    });

    it('should not be able to create ánotofocation content with more then 240 characters', () => {
        expect(() => new Content('A'.repeat(241))).toThrow();
    });
});
