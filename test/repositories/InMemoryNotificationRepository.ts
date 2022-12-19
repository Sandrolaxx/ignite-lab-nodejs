import { Notification } from "@app/entities/Notification";
import { NotificationRepository } from "@app/repositories/NotificationRepository";

export class InMemoryNotificationRepository implements NotificationRepository {
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}
