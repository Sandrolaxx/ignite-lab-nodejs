import { ContentVO } from "./ContentVO";
import { randomUUID } from "node:crypto";

export class Notification {
    private id: string;

    private recipientId: string;

    private content: ContentVO;

    private category: string;

    private createdAt: Date;

    private readAt?: Date | null;

    private canceledAt?: Date | null;

    constructor(recipientId: string, content: ContentVO, category: string, createdAt?: Date, readAt?: Date | null) {
        this.id = randomUUID();
        this.recipientId = recipientId;
        this.content = content;
        this.category = category;
        this.createdAt = createdAt ?? new Date();
        this.readAt = readAt;
    }

    public cancel() {
        this.canceledAt = new Date();
    }

    public getId() {
        return this.id;
    }

    public getRecipientId() {
        return this.recipientId;
    }

    public setRecipientId(recipientId: string) {
        this.recipientId = recipientId;
    }

    public getContent() {
        return this.content;
    }

    public setContent(content: ContentVO) {
        this.content = content;
    }

    public getCategory() {
        return this.category;
    }

    public setCategory(category: string) {
        this.category = category;
    }

    public getCreatedAt() {
        return this.createdAt;
    }

    public getReadAt(): Date | null | undefined {
        return this.readAt;
    }

    public setReadAt(readAt: Date | null | undefined) {
        this.readAt = readAt;
    }

    public getCanceledAt() {
        return this.canceledAt;
    }

}
