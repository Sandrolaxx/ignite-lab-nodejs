const { randomUUID } = require("crypto");
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: "my-producer-example",
    brokers: ["localhost:9092"],
});

const producer = kafka.producer();

async function main() {
    const topic = "Notifications";
    await producer.connect();

    console.log("Enviando mensagem tópico: ".concat(topic).concat("📨"));

    await producer.send({
        topic,
        messages: [
            {
                value: JSON.stringify({
                    content: "Nova solicitação de amizade do MicroService producer!",
                    category: "social",
                    recipientId: randomUUID(),
                }),
            },
        ],
    });

    console.log("Finalizado envio, realizando desconexão⛔");

    await producer.disconnect();
}

main();
