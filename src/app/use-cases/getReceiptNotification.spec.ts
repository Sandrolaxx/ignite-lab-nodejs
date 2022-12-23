import { makeNotification } from "@test/factories/notificationFactory";
import { InMemoryNotificationRepository } from "@test/repositories/InMemoryNotificationRepository";
import { GetRecipientNotifications } from "./GetRecipientNotifications";

describe("Get Recipient Notification", () => {
    test("Deve ser possível listar as notificações de um recebedor", async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository);

        const notification = makeNotification();

        await notificationsRepository.create(notification);
        await notificationsRepository.create(makeNotification());

        const { notifications } = await getRecipientNotifications.execute({ recipientId: notification.getRecipientId() });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ recipientId: notification.getRecipientId() }),
                expect.objectContaining({ recipientId: notification.getRecipientId() }),
            ]),
        );
    });
});
