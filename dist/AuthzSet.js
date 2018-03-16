"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An AuthzArray is an Array of permissions for a certain person,
 */
class AuthzSet {
    constructor(permissions = new Set()) {
        this.permissions = permissions;
        // Let Typescript handle the rest.
    }
}
exports.AuthzSet = AuthzSet;
