import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
    @IsUUID()
    @IsNotEmpty()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 70)
    content: string;

    @IsNotEmpty()
    category: string;
}
