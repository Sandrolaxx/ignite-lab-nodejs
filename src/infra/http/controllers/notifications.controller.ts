import { Body, Controller, Post } from "@nestjs/common";
import { SendNotification } from "@app/use-cases/SendNotification";
import { CreateNotificationBodyDto } from "../dto/CreateNotificationBodyDto";

@Controller("notifications")
export class NotificationsController {
    constructor(private sendNotification: SendNotification) {}

    @Post()
    async create(@Body() body: CreateNotificationBodyDto) {
        const { notification } = await this.sendNotification.execute({
            category: body.category,
            content: body.content,
            recipientId: body.recipientId,
        });

        return notification;
    }
}
