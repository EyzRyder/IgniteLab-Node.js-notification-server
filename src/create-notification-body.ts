import { IsUUID, IsNotEmpty, Length } from "class-validator";

export class CreateNotificationBody {
    @IsNotEmpty()
    @IsUUID()
    recipienteId: string;

    @IsNotEmpty()
    @Length(5,240)
    content: string;

    @IsNotEmpty()
    category: string;
}