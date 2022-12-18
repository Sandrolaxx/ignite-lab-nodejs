import { ISendNotification, ISendNotificationResponse } from "src/utils/types";
import { ContentVO } from "../entities/ContentVO";
import { Notification } from "../entities/Notification";
import { NotificationRepository } from "../repositories/NotificationRepository";

export class SendNotification {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: ISendNotification): Promise<ISendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification(recipientId, new ContentVO(content), category);

        this.notificationRepository.create(notification);

        return {
            notification,
        };
    }
}
