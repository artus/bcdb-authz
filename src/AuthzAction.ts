import { AuthzOperations } from './AuthzOperations';
import { AuthzPermissions } from './AuthzPermissions';

export class AuthzAction {
    date: Date;

    constructor(public operation: AuthzOperations, public permission: AuthzPermissions, public subject: string, public version: string = "0.0.1") {
        this.date = new Date();
    }

    static fromMetadata(metadata: any): AuthzAction {

        let operation;
        let permission;
        let subject = metadata.subject;
        let version = metadata.version;

        // Parse operation
        switch (metadata.operation) {
            case "GRANT":
                operation = AuthzOperations.GRANT;
                break;

            case "REVOKE":
                operation = AuthzOperations.REVOKE;
                break;
        }

        // Parse permissions
        switch (metadata.permission) {
            case "CREATE":
                permission = AuthzPermissions.CREATE;
                break;

            case "READ":
                permission = AuthzPermissions.READ;
                break;

            case "UPDATE":
                permission = AuthzPermissions.UPDATE;
                break;

            case "DELETE":
                permission = AuthzPermissions.DELETE;
                break;

            case "ALL":
                permission = AuthzPermissions.ALL;
                break;
        }

        return new AuthzAction(operation, permission, subject, version);

    }
}