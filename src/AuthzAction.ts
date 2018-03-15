export class AuthzAction
{
    date: Date;

    constructor(public action : AuthzAction, public subject : string, public version : string)
    {
        this.date = new Date();
    }
}