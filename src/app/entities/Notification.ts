import { ContentVO } from "./ContentVO";

export class Notification {
    private recipientId: string;

    private content: ContentVO;

    private category: string;

    private createdAt: Date;

    private readAt?: Date | null;

    constructor(recipientId: string, content: ContentVO, category: string, createdAt?: Date, readAt?: Date | null) {
        this.recipientId = recipientId;
        this.content = content;
        this.category = category;
        this.createdAt = createdAt ?? new Date();
        this.readAt = readAt;
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
}
