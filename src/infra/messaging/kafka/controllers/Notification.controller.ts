import { SendNotification } from "@app/use-cases/SendNotification";
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { INotificationEvent } from "@utils/types";

@Controller()
export class NotificationsController {
    constructor(private sendNotification: SendNotification) {}
    
    @EventPattern("Notifications")
    async handleSendNotification(@Payload() content: INotificationEvent) {
        
        console.log("Consumindo mensagem do tópico✨");
        console.log("Mensagem: ".concat(content.content));
        
        await this.sendNotification.execute(content);
        
    }
}