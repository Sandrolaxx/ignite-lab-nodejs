import { Notification as RawNotification } from "@prisma/client"
import { ContentVO } from "@app/entities/ContentVO";
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

    static toDomain(rawNotification: RawNotification): Notification {
        return new Notification(
            rawNotification.recipientId,
            new ContentVO(rawNotification.content),
            rawNotification.category,
            rawNotification.createdAt,
            rawNotification.readAt,
            rawNotification.canceledAt,
            rawNotification.id,
        );
    }
}
