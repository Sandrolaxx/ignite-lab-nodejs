import { Injectable } from "@nestjs/common";
import { Notification } from "@app/entities/Notification";
import { NotificationRepository } from "src/app/repositories/NotificationRepository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/PrismaNotificationMapper";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private prismaService: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: PrismaNotificationMapper.toPrisma(notification),
        });
    }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prismaService.notification.findFirst({
            where: {
                id: notificationId,
            }
        });

        return notification;
    }

    merge(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
