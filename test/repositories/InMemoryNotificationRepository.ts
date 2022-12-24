import { Notification } from "@app/entities/Notification";
import { NotificationRepository } from "@app/repositories/NotificationRepository";

export class InMemoryNotificationRepository implements NotificationRepository {
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }

    async merge(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex(item => item.getId() == notification.getId());

        if (notificationIndex >= 0) {
            this.notifications[notificationIndex] = notification;
        }
    }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find(item => item.getId() == notificationId);

        if (!notification) {
            return null;
        }

        return notification;
    }

    async countByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter(not => not.getRecipientId() == recipientId).length;
    }

    async getRecipientNotificationsByRecipientId(recipientId: string): Promise<Notification[]> {
        return this.notifications.filter(not => not.getRecipientId() == recipientId);
    }
}
