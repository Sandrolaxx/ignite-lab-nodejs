import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumer extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({

        });
    }
    
    async onModuleDestroy() {
        await this.close();
    }

}