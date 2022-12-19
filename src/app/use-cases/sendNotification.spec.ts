import { InMemoryNotificationRepository } from "../../../test/repositories/InMemoryNotificationRepository";
import { SendNotification } from "./SendNotification";

describe("Send Notification", () => {
    test("Deve ser possível enviar uma notificação", async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            recipientId: "exemple-recepient-id",
            content: "Apenas uma teste",
            category: "social"
        })

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    })
});