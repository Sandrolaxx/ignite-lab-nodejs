import { makeNotification } from "@test/factories/notificationFactory";
import { InMemoryNotificationRepository } from "@test/repositories/InMemoryNotificationRepository";
import { NotificationNotFound } from "./errors/NotificationNotFound";
import { UnReadNotification } from "./UnReadNotification";

describe("UnRead Notification", () => {
    test("Deve ser possível desmarcar como lida uma notificação", async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const unreadNotification = new UnReadNotification(notificationsRepository);

        const notification = makeNotification();

        await notificationsRepository.create(notification);

        await unreadNotification.execute({ notificationId: notification.getId() });


        expect(notificationsRepository.notifications[0].getReadAt()).toBeNull();
    });

    test("Não deve ser possível desmarcar como lida uma notificação que não exista", async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const unReadNotification = new UnReadNotification(notificationsRepository);

        expect(() => unReadNotification.execute({ notificationId: "notificaticationId" }))
            .rejects.toThrowError(NotificationNotFound);
    });
});
