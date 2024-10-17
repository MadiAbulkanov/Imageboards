import { Expose } from "class-transformer";

export class MessageDto {
    @Expose()
    author!: string;
    @Expose()
    message!: string;
    @Expose()
    image!: string;
}