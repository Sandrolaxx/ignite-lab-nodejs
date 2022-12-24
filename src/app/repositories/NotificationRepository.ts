import { Notification } from "../entities/Notification";

export abstract class NotificationRepository {
    abstract create(notification: Notification): Promise<void>;

    abstract findById(notificationId: string): Promise<Notification | null>;

    abstract merge(notification: Notification): Promise<void>;
    
    abstract countByRecipientId(recipientId: string): Promise<number>;
    
    abstract getRecipientNotificationsByRecipientId(recipientId: string): Promise<Notification[]>;

}
