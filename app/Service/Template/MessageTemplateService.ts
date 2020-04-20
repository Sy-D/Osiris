import {Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../config/types";
import { BaseService } from "../core/BaseService";
import { MessageTemplate } from "../../Domain/Model/MessageTemplate";
import { Repository } from "typeorm/repository/Repository";

@injectable()
export class MessageTemplateService extends BaseService<MessageTemplate> {

  constructor(
    private readonly messageTemplateRepository: Repository<MessageTemplate>) {
    super(messageTemplateRepository);
  }


  async getByTemplateName(templateName: string) {
    const template = this.messageTemplateRepository.findOne({ name: templateName });

    if(!template) {
      return; // throw exception
    }

    return template;
  }
}
