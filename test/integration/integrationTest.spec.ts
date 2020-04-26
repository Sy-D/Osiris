import container from "../../config/inversify.config";
import {TYPES} from "../../config/types";
import { Client } from "discord.js";
import  Bot from "../../app/Feature/Bot";
// ...

describe('Bot', () => {
  let discordMock: Client;
  let discordInstance: Client;
  let bot: Bot;

  beforeEach(() => {
  //  discordMock = mock(Client);
 //   discordInstance = instance(discordMock);
    container.rebind<Client>(TYPES.Client)
      .toConstantValue(discordInstance);
    bot = container.get<Bot>(TYPES.Bot);
  });

  after('Exit mocha gracefully after finishing all tests execution',  () => {
    // Exit node process
    process.exit();
  });

  // Test cases here

});