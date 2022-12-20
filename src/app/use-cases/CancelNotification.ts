import { Injectable } from "@nestjs/common";
import { ICancelNotification } from "src/utils/types";
import { NotificationRepository } from "../repositories/NotificationRepository";
import { NotificationNotFound } from "./errors/NotificationNotFound";

@Injectable()
export class CancelNotification {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: ICancelNotification): Promise<void> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(notificationId);

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.cancel();
 
        await this.notificationRepository.merge(notification);
    }
}
