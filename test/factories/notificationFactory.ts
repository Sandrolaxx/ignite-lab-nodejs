import { ContentVO } from "@app/entities/ContentVO";
import { Notification } from "@app/entities/Notification";
import { IOverrideNotification } from "@utils/types";

export function makeNotification(override: Partial<IOverrideNotification> = {}) {
    return new Notification(
        override.recipientId ?? "exemple-recepient-id",
        override.content ?? new ContentVO("Apenas um teste 1"),
        override.category ?? "social",
        override.createdAt,
        override.readAt
    );
}
