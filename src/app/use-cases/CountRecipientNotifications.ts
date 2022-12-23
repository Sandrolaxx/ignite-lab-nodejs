import { Injectable } from "@nestjs/common";
import { ICountRecipientNotifications, ICountRecipientNotificationsResponse } from "src/utils/types";
import { NotificationRepository } from "../repositories/NotificationRepository";

@Injectable()
export class CountRecipientNotifications {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: ICountRecipientNotifications): Promise<ICountRecipientNotificationsResponse> {
        const { recipientId } = request;

        const count = await this.notificationRepository.countByRecipientId(recipientId);

        return {
            count,
        };
    }
}
