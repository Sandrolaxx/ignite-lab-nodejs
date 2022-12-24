import { Injectable } from "@nestjs/common";
import { IUnReadNotification } from "src/utils/types";
import { NotificationRepository } from "../repositories/NotificationRepository";
import { NotificationNotFound } from "./errors/NotificationNotFound";

@Injectable()
export class UnReadNotification {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: IUnReadNotification): Promise<void> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(notificationId);

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.unread();

        await this.notificationRepository.merge(notification);
    }
}
