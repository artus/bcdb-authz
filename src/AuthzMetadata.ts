/**
 * An AuthzMetadata is a class that can be used to construct the metadata payload for a transaction.
 */
export class AuthzMetadata
{
    constructor(public type : string, public data: any = {}, public version : string = "0.0.1")
    {
        // Let Typescript handle the rest.
    }
}