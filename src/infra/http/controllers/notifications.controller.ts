import { CancelNotification } from "@app/use-cases/CancelNotification";
import { SendNotification } from "@app/use-cases/SendNotification";
import { Body, Controller, Headers, Patch, Post } from "@nestjs/common";
import { CreateNotificationBodyDto } from "../dto/CreateNotificationBodyDto";
import { NotificationHttpMapper } from "../mappers/NotificationHttpMapper";

@Controller("notifications")
export class NotificationsController {
    constructor(private sendNotification: SendNotification) {}
    // constructor(private cancelNotification: CancelNotification) {}

    @Post()
    async create(@Body() body: CreateNotificationBodyDto) {
        const { notification } = await this.sendNotification.execute({
            category: body.category,
            content: body.content,
            recipientId: body.recipientId,
        });

        return NotificationHttpMapper.toHttp(notification);
    }

    @Patch()
    async cancel(@Headers() notificationId: string) {
        // await this.cancelNotification.execute({notificationId});
    }
}
