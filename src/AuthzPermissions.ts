/**
 * The AuthzPermissions enumeration is a list of permissions that a person can obtain or lose for a certain asset.
 */
export enum AuthzPermissions
{
    CREATE, // This is included but I have no idea how this could be used. it's not possible to create an already existing asset.
    READ,
    UPDATE,
    DELETE,
}