import { Body, Controller, Get, Post } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { randomUUID } from "node:crypto";
import { CreateNotificationBody } from "./create-notificaion-body";

@Controller("notifications")
export class AppController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    list() {
        return this.prismaService.notification.findMany();
    }

    @Post()
    async create(@Body() body: CreateNotificationBody) {
        await this.prismaService.notification.create({
            data: {
                id: randomUUID(),
                category: body.category,
                recipientId: body.recipientId,
                content: body.content,
            },
        });
    }
}
