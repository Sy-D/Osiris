import {Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../config/types";
import axios, { AxiosResponse } from 'axios';

@injectable()
export class AuthentificationService {

  constructor(
    //@inject(TYPES.ApplicationConfig) applicationConfig: ApplicationConfig
  ) {
  }

    // TODO: Discuss if form fields should be dynamically  (low risk of changing)
    // TODO: login url should be checked first and eventually be updated and put into config

    async login(user: string, password: string): Promise<AxiosResponse<any>> {
        if  (!user || !password) {
            return; // TODO: Throw Exception
        }

        if (typeof user !== 'string' || typeof password !== 'string')
        {
            return; // TODO: Throw Exception
        }

        const form = new FormData();
        form.append('username', user);
        form.append('password', password);

        return axios.post('https://shibboleth.tubit.tu-berlin.de/idp/profile/SAML2/Redirect/SSO?execution=e1s2',
        form, {
           // headers: form.getHeaders(),
        })
  }
}
