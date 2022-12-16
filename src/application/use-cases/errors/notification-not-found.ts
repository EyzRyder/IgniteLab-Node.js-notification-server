import { Notification } from './../../entities/notifications';
export class NotificationNotFound extends Error { 
    constructor() {
        super(`Notification not found`);
    }
}