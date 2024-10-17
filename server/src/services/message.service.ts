import { MessageDto } from "@/dto/message.dto";
import { IMessage } from "@/interfaces/message.interface";
import { randomUUID } from "crypto";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const filePath = path.join(__dirname, '../data/messages.json');

export class MessageService {
    private messages!: IMessage[];

    constructor() {
        this.init();
    }

    init = (): void => {
        try {
            const fileContents = readFileSync(filePath, 'utf8');
            this.messages = JSON.parse(fileContents.toString());
        } catch (error) {
            this.messages = [];
        }
    };

    save = ():void => {
        writeFileSync(filePath, JSON.stringify(this.messages, null, 2));
    }

    getMessages = (): IMessage[] => {
        return this.messages;
    };

    createMessage = (messageDto: MessageDto): IMessage => {
        const datatime = new Date().toISOString();
       
        const message = {
            id: randomUUID(),
            datatime: datatime,
            ...messageDto,
        };
        this.messages.push(message);
        this.save();
        return message;
    };
}