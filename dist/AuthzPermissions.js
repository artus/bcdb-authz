"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The AuthzPermissions enumeration is a list of permissions that a person can obtain or lose for a certain asset.
 */
var AuthzPermissions;
(function (AuthzPermissions) {
    AuthzPermissions[AuthzPermissions["CREATE"] = 0] = "CREATE";
    AuthzPermissions[AuthzPermissions["READ"] = 1] = "READ";
    AuthzPermissions[AuthzPermissions["UPDATE"] = 2] = "UPDATE";
    AuthzPermissions[AuthzPermissions["DELETE"] = 3] = "DELETE";
})(AuthzPermissions = exports.AuthzPermissions || (exports.AuthzPermissions = {}));
