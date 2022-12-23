import { makeNotification } from "@test/factories/notificationFactory";
import { InMemoryNotificationRepository } from "@test/repositories/InMemoryNotificationRepository";
import { CountRecipientNotifications } from "./CountRecipientNotifications";

describe("Count Notification", () => {
    test("Deve ser possível contar a quantidade de notificações de um recebedor", async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

        const notification = makeNotification();

        await notificationsRepository.create(notification);
        await notificationsRepository.create(makeNotification());
        await notificationsRepository.create(makeNotification());

        const { count } = await countRecipientNotifications.execute({ recipientId: notification.getRecipientId() });

        expect(count).toEqual(3);
    });
});
