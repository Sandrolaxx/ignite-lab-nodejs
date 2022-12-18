import { Notification } from "./Notification";
import { randomUUID } from "node:crypto";
import { ContentVO } from "./ContentVO";

describe("Notification:", () => {
    test("Deve ser possível criar uma notificação", () => {
        const content = new ContentVO("Você recebeu um novo pedido de amizade.");
        const notification = new Notification(randomUUID(), content, "social");

        expect(notification).toBeTruthy();
    });
});
