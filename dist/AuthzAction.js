"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthzOperations_1 = require("./AuthzOperations");
const AuthzPermissions_1 = require("./AuthzPermissions");
class AuthzAction {
    constructor(operation, permission, subject, version = "0.0.1") {
        this.operation = operation;
        this.permission = permission;
        this.subject = subject;
        this.version = version;
        this.date = new Date();
    }
    static fromMetadata(metadata) {
        let operation;
        let permission;
        let subject = metadata.subject;
        let version = metadata.version;
        // Parse operation
        switch (metadata.operation) {
            case "GRANT":
                operation = AuthzOperations_1.AuthzOperations.GRANT;
                break;
            case "REVOKE":
                operation = AuthzOperations_1.AuthzOperations.REVOKE;
                break;
        }
        // Parse permissions
        switch (metadata.permission) {
            case "CREATE":
                permission = AuthzPermissions_1.AuthzPermissions.CREATE;
                break;
            case "READ":
                permission = AuthzPermissions_1.AuthzPermissions.READ;
                break;
            case "UPDATE":
                permission = AuthzPermissions_1.AuthzPermissions.UPDATE;
                break;
            case "DELETE":
                permission = AuthzPermissions_1.AuthzPermissions.DELETE;
                break;
            case "ALL":
                permission = AuthzPermissions_1.AuthzPermissions.ALL;
                break;
        }
        return new AuthzAction(operation, permission, subject, version);
    }
}
exports.AuthzAction = AuthzAction;
