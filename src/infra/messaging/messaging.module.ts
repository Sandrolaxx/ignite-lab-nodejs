import { SendNotification } from "@app/use-cases/SendNotification";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { NotificationsController } from "./kafka/controllers/Notification.controller";
import { KafkaConsumerService } from "./kafka/KafkaConsumer.service";

@Module({
    imports: [DatabaseModule],
    providers: [KafkaConsumerService, SendNotification],
    controllers: [NotificationsController]
})
export class MessagingModule { }