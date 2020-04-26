require('dotenv').config();
import container from "./Config/inversify.config";
import {TYPES} from "./Config/types";
import Bot from './app/Feature/Bot';

let bot = container.get<Bot>(TYPES.Bot);
bot.listen().then(() => {
  console.log('Logged in!')
}).catch((error) => {
  console.log('Oh no! ', error)
});