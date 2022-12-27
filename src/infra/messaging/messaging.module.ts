import { Module } from "@nestjs/common";
import { KafkaConsumerService } from "./kafka/KafkaConsumer.service";

@Module({
    imports: [],
    providers: [KafkaConsumerService],
    controllers: []
})
export class MessagingModule { }