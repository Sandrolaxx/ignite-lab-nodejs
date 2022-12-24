import { makeNotification } from "@test/factories/notificationFactory";
import { InMemoryNotificationRepository } from "@test/repositories/InMemoryNotificationRepository";
import { NotificationNotFound } from "./errors/NotificationNotFound";
import { ReadNotification } from "./ReadNotification";

describe("Read Notification", () => {
    test("Deve ser possível marcar como lida uma notificação", async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationsRepository);

        const notification = makeNotification();

        await notificationsRepository.create(notification);

        await readNotification.execute({ notificationId: notification.getId() });

        expect(notificationsRepository.notifications[0].getReadAt()).toEqual(expect.any(Date));
    });

    test("Não deve ser possível marcar como lida uma notificação que não exista", async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationsRepository);

        expect(() => readNotification.execute({ notificationId: "notificaticationId" }))
            .rejects.toThrowError(NotificationNotFound);
    });
});
