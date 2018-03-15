import { AuthzOperations } from './AuthzOperations';
import { AuthzPermissions } from './AuthzPermissions';

export class AuthzAction
{
    date: Date;

    constructor(public operation : AuthzOperations, public permission : AuthzPermissions, public subject : string, public version : string = "0.0.1")
    {
        this.date = new Date();
    }
}