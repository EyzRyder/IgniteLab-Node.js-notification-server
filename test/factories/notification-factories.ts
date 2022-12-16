import { Content } from '@application/entities/content';
import { Notification, NotificationProps } from '@application/entities/notifications';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override={}) {
    return new Notification({
        category: "Social",
        content: new Content("Novo solicitação de amizade"),
        recipienteId: 'recipiente-2',
        ...override,
    });
}