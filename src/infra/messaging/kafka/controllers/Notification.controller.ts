import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class NotificationsController {
    
    @EventPattern("Notifications")
    async handleSendNotification() {
        console.log("Teste bolado");
        
    }
}