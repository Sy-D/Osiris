import {Message} from "discord.js";
import {PingTest} from "./pingTest";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../config/types";

@injectable()
export class MessageResponder {
  private pingTest: PingTest;

  constructor(
    @inject(TYPES.PingTest) pingTest: PingTest
  ) {
    this.pingTest = pingTest;
  }

  handle(message: Message): Promise<Message | Message[]> {
    if (this.pingTest.isPing(message.content)) {
      return message.reply('pong!');
    }

    return Promise.reject();
  }
}
