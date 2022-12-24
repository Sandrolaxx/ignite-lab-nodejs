import { ContentVO } from "@app/entities/ContentVO";
import { Notification } from "src/app/entities/Notification";

export interface IOverrideNotification {
    recipientId: string;
    content: ContentVO;
    category: string;
    createdAt: Date;
    readAt?: Date | null;
    canceledAt?: Date | null;
    id?: string;
}

export interface ISendNotification {
    recipientId: string;
    content: string;
    category: string;
}

export interface ISendNotificationResponse {
    notification: Notification;
}

export interface ICancelNotification {
    notificationId: string;
}

export interface ICountRecipientNotificationsResponse {
    count: number;
}

export interface ICountRecipientNotifications {
    recipientId: string;
}

export interface IGetRecipientNotificationsResponse {
    notifications: Notification[];
}

export interface IGetRecipientNotifications {
    recipientId: string;
}

export interface IReadNotification {
    notificationId: string;
}

export interface IUnReadNotification {
    notificationId: string;
}