export class Notificaion {

    private recipientId: string;

    private content: string;

    private category: string;

    private createdAt: Date;

    private readAt?: Date | null;

    constructor(content: string, category: string) {
        this.content = content;
        this.category = category;
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

    public setContent(content: string) {
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
