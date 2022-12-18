import { Notification } from "../entities/Notification";

export abstract class NotificationRepository {
    abstract create(notificaion: Notification): Promise<void>;
}
