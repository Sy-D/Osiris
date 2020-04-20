import { HttpException } from "./Core/http.exception";

export class BadGatewayException extends HttpException {
    constructor(message, error = 'Bad Gateway') {
        super(HttpException.createBody(message, error, 502), 502);
    }
}