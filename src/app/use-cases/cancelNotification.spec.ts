import { ContentVO } from "@app/entities/ContentVO";
import { Notification } from "@app/entities/Notification";
import { InMemoryNotificationRepository } from "@test/repositories/InMemoryNotificationRepository";
import { CancelNotification } from "./CancelNotification";
import { NotificationNotFound } from "./errors/NotificationNotFound";

describe("Cancel Notification", () => {
    test("Deve ser possível cancelar uma notificação", async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = new Notification("exemple-recepient-id", new ContentVO("Apenas uma teste"), "social");

        await notificationsRepository.create(notification);

        await cancelNotification.execute({ notificationId: notification.getId() });

        expect(notificationsRepository.notifications[0].getCanceledAt()).toEqual(expect.any(Date));
    });

    test("Não deve ser possível cancelar uma notificação que não exista", async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        expect(() => cancelNotification.execute({ notificationId: "notificaticationId" }))
            .rejects.toThrowError(NotificationNotFound);
    });
});
