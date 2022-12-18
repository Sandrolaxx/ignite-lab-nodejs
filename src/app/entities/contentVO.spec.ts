import { ContentVO } from "./contentVO";

describe("Notification Content:", () => {
    test("Deve ser possível criar o conteúdo de uma notificação", () => {
        const content = new ContentVO("Você recebeu um novo pedido de amizade.");

        expect(content).toBeTruthy();
    });

    test("Não deve ser possível criar o conteúdo com menos de 5 caracteres", () => {
        expect(() => new ContentVO("Você")).toThrowError();
    });

    test("Não deve ser possível criar o conteúdo com mais de 120 caracteres", () => {
        expect(() => new ContentVO("Test".repeat(200))).toThrowError();
    });
});
