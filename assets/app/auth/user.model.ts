export class Message {
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string) {}
}
// '?' signifies an optional property