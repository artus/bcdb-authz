"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An AuthzMetadata is a class that can be used to construct the metadata payload for a transaction.
 */
class AuthzMetadata {
    constructor(type, data = {}, version = "0.0.1") {
        this.type = type;
        this.data = data;
        this.version = version;
        // Let Typescript handle the rest.
    }
}
exports.AuthzMetadata = AuthzMetadata;
