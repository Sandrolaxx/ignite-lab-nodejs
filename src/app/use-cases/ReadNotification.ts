import { Injectable } from "@nestjs/common";
import { IReadNotification } from "src/utils/types";
import { NotificationRepository } from "../repositories/NotificationRepository";
import { NotificationNotFound } from "./errors/NotificationNotFound";

@Injectable()
export class ReadNotification {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: IReadNotification): Promise<void> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(notificationId);

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.read();
 
        await this.notificationRepository.merge(notification);
    }
}
