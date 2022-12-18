import { SendNotification } from "./SendNotification";

describe("Send Notification", () => {
    test("Deve ser possível enviar uma notificação", async () => {
        const sendNotification = new SendNotification();

        const { notification } = await sendNotification.execute({
            recipientId: "exemple-recepient-id",
            content: "Apenas uma teste",
            category: "social"
        })

        expect(notification).toBeTruthy();
    })
});