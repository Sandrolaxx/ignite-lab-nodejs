import { Notification } from "@app/entities/Notification";

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.getId(),
            category: notification.getCategory(),
            recipientId: notification.getRecipientId(),
            content: notification.getContent().getValue(),
            createdAt: notification.getCreatedAt(),
            readAt: notification.getReadAt(),
            canceledAt: notification.getCanceledAt()
        };
    }
}
