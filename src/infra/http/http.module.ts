import { Module } from "@nestjs/common";
import { SendNotification } from "@app/use-cases/SendNotification";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller";
import { CancelNotification } from "@app/use-cases/CancelNotification";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification, CancelNotification]
})
export class HttpModule {}
