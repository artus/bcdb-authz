"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthzAction {
    constructor(operation, permission, subject, version = "0.0.1") {
        this.operation = operation;
        this.permission = permission;
        this.subject = subject;
        this.version = version;
        this.date = new Date();
    }
}
exports.AuthzAction = AuthzAction;
