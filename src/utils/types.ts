import { Notification } from "src/app/entities/Notification";

export interface ISendNotification {
    recipientId: string;
    content: string;
    category: string;
}

export interface ISendNotificationResponse {
    notification: Notification;
}