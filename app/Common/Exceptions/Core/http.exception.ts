export class HttpException extends Error {
    private readonly response;
    private readonly status;
    readonly message: any;
    
    constructor(response, status) {
        super();
        this.response = response;
        this.status = status;
        this.message = response;
    }
    getResponse() {
        return this.response;
    }
    getStatus() {
        return this.status;
    }
    toString() {
        const message = this.getErrorString(this.message);
        return `Error: ${message}`;
    }
    getErrorString(target) {
        return typeof target === 'string' ? target : JSON.stringify(target);
    }
    static createBody(message, error, statusCode) {
        if (!message) {
            return { statusCode, error };
        }
        // check if object and if its not a array has message then return params as object
    }
}
