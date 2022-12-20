import { Notification } from "@app/entities/Notification"

export class NotificationHttpMapper {
    static toHttp(notification: Notification) {
        return {
            id: notification.getId(),
            recipientId: notification.getRecipientId(),
            content: notification.getContent().getValue(),
            category: notification.getCategory(),
            createdAt: notification.getCreatedAt()
         }
    }
}