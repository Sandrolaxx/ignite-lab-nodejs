import { CancelNotification } from "@app/use-cases/CancelNotification";
import { CountRecipientNotifications } from "@app/use-cases/CountRecipientNotifications";
import { GetRecipientNotifications } from "@app/use-cases/GetRecipientNotifications";
import { ReadNotification } from "@app/use-cases/ReadNotification";
import { SendNotification } from "@app/use-cases/SendNotification";
import { UnReadNotification } from "@app/use-cases/UnReadNotification";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification, CancelNotification, ReadNotification,
        UnReadNotification, GetRecipientNotifications, CountRecipientNotifications],
})
export class HttpModule {}
