import { Injectable } from "@nestjs/common";
import { Notification } from "@app/entities/Notification";
import { NotificationRepository } from "src/app/repositories/NotificationRepository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private prismaService: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.getId(),
                category: notification.getCategory(),
                recipientId: notification.getRecipientId(),
                content: notification.getContent().getValue(),
                readAt: notification.getReadAt(),
                createdAt: notification.getCreatedAt(),
            },
        });
    }
}
