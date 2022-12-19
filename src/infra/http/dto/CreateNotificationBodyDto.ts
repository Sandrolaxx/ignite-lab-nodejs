import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBodyDto {
    @IsUUID()
    @IsNotEmpty()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 120)
    content: string;

    @IsNotEmpty()
    category: string;
}
