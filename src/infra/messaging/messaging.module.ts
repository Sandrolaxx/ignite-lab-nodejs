import { Module } from "@nestjs/common";
import { NotificationsController } from "./kafka/controllers/Notification.controller";
import { KafkaConsumerService } from "./kafka/KafkaConsumer.service";

@Module({
    imports: [],
    providers: [KafkaConsumerService],
    controllers: [NotificationsController]
})
export class MessagingModule { }