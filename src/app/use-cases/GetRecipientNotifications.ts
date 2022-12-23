import { Injectable } from "@nestjs/common";
import { IGetRecipientNotifications, IGetRecipientNotificationsResponse } from "src/utils/types";
import { NotificationRepository } from "../repositories/NotificationRepository";

@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: IGetRecipientNotifications): Promise<IGetRecipientNotificationsResponse> {
        const { recipientId } = request;

        const notifications = await this.notificationRepository.getRecipientNotificationsByRecipientId(recipientId);

        return {
            notifications,
        };
    }
}
