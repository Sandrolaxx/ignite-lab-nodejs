import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: "notitication-service",
                brokers: ["localhost:9092"],
            },
            consumer: {
                groupId: "services",
            },
        });
    }

    async onModuleDestroy() {
        await this.close();
    }
}
