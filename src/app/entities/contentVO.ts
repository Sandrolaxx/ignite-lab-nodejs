export class ContentVO {
    private readonly content: string;

    getValue(): string {
        return this.content;
    }

    private vilidateContentLength(content: string) {
        return content.length > 5 && content.length <= 120;
    }

    constructor(content: string) {
        const isValidLength = this.vilidateContentLength(content);

        if (!isValidLength) {
            throw new Error("O tamanho do conteúdo é inválido!");
        }

        this.content = content;
    }
}
