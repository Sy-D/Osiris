import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "../app/Feature/Bot";
import {Client} from "discord.js";
import { MessageResponder } from "../app/Service/Chat/MessageResponder";
import { PingTest } from "../app/Service/Chat/pingTest";
import { MessageTemplateService } from "../app/Service/Template/MessageTemplateService";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
//TODO: Create ClientHandle which extends discord.js Client and uses inversifyjs so we can bind it
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<MessageResponder>(TYPES.MessageResponder).to(MessageResponder).inSingletonScope();
container.bind<MessageTemplateService>(TYPES.MessageTemplateService).to(MessageTemplateService).inSingletonScope();
container.bind<PingTest>(TYPES.PingTest).to(PingTest).inSingletonScope();

export default container;