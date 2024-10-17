
import { MessageDto } from "@/dto/message.dto";
import { MessageService } from "@/services/message.service";
import { plainToClass } from "class-transformer";
import { RequestHandler } from "express";

export class MessageController {
    private service: MessageService;

    constructor() {
        this.service = new MessageService();
    }

    getMessages: RequestHandler = (req, res):void => {
        const messages = this.service.getMessages();
        res.send(messages);
    };
    
    createMessage: RequestHandler = (req, res):void => {
        const messageDto = plainToClass(MessageDto, req.body);
        if (!messageDto.message) {
            res.status(400).send({ "error": "Message must be present in the request" });
            return;
        };
        if(req.file) messageDto.image = req.file?.filename;
        const message = this.service.createMessage(messageDto);
        res.send(message);
    };
}