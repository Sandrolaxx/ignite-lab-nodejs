import { Notification } from "@app/entities/Notification";
import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "src/app/repositories/NotificationRepository";
import { PrismaNotificationMapper } from "../mappers/PrismaNotificationMapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private prismaService: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: PrismaNotificationMapper.toPrisma(notification),
        });
    }

    async merge(notification: Notification): Promise<void> {
        await this.prismaService.notification.update({
            where: {
                id: notification.getId(),
            },
            data: PrismaNotificationMapper.toPrisma(notification),
        });
    }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prismaService.notification.findUnique({
            where: {
                id: notificationId,
            },
        });

        if (notification == null) {
            return null;
        }

        return PrismaNotificationMapper.toDomain(notification);
    }

    async countByRecipientId(recipientId: string): Promise<number> {
        return this.prismaService.notification.count({
            where: {
                recipientId,
            },
        });
    }

    async getRecipientNotificationsByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prismaService.notification.findMany({
            where: {
                recipientId,
            },
        });

        return notifications.map(PrismaNotificationMapper.toDomain);
    }
}
