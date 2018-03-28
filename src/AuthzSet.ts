import { AuthzPermissions } from "./AuthzPermissions";

/**
 * An AuthzArray is an Array of permissions for a certain person, 
 */
export class AuthzSet
{
    constructor(public permissions : Set<AuthzPermissions> = new Set<AuthzPermissions>())
    {
        // Let Typescript handle the rest.
    }
}