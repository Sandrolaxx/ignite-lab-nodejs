import { CancelNotification } from "@app/use-cases/CancelNotification";
import { CountRecipientNotifications } from "@app/use-cases/CountRecipientNotifications";
import { GetRecipientNotifications } from "@app/use-cases/GetRecipientNotifications";
import { ReadNotification } from "@app/use-cases/ReadNotification";
import { SendNotification } from "@app/use-cases/SendNotification";
import { UnReadNotification } from "@app/use-cases/UnReadNotification";
import { Body, Controller, Get, Headers, Patch, Post } from "@nestjs/common";
import { CreateNotificationBodyDto } from "../dto/CreateNotificationBodyDto";
import { NotificationHttpMapper } from "../mappers/NotificationHttpMapper";

@Controller("notifications")
export class NotificationsController {
    constructor(
        private sendNotification: SendNotification,
        private cancelNotification: CancelNotification,
        private readNotification: ReadNotification,
        private unreadNotification: UnReadNotification,
        private getRecipientNotificaions: GetRecipientNotifications,
        private countRecipientNotifications: CountRecipientNotifications,
    ) {}

    @Post()
    async create(@Body() body: CreateNotificationBodyDto) {
        const { notification } = await this.sendNotification.execute({
            category: body.category,
            content: body.content,
            recipientId: body.recipientId,
        });

        return NotificationHttpMapper.toHttp(notification);
    }

    @Patch("/cancel")
    async cancel(@Headers("notificationId") notificationId: string) {
        await this.cancelNotification.execute({ notificationId });
    }

    @Patch("/read")
    async read(@Headers("notificationId") notificationId: string) {
        await this.readNotification.execute({ notificationId });
    }

    @Patch("/unread")
    async unread(@Headers("notificationId") notificationId: string) {
        await this.unreadNotification.execute({ notificationId });
    }

    @Get("/all")
    async findAllByRecipientId(@Headers("recipientId") recipientId: string) {
        const { notifications } = await this.getRecipientNotificaions.execute({ recipientId });

        return notifications.map(NotificationHttpMapper.toHttp);
    }

    @Get("/count")
    async countByRecipientId(@Headers("recipientId") recipientId: string) {
        return await this.countRecipientNotifications.execute({ recipientId });
    }
}
