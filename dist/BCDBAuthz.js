"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const driver = __importStar(require("bigchaindb-driver"));
const bip39 = __importStar(require("bip39"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
/**
 * BCDBAuthz is the facade class that should be used to work with bcdb-authz.
 */
class BCDBAuthz {
    /**
     * Initialise a new BCDBAuthz facade class.
     * @constructor
     *
     * @param {string} bigchaindbUrl - The URL of the bigchaindb network you want to connect to.
     * @param {string} appId - Your app ID.
     * @param {string} appKey - Your app Key.
     */
    constructor(bigchaindbUrl, appId, appKey) {
        this.bigchaindbUrl = bigchaindbUrl;
        this.appId = appId;
        this.appKey = appKey;
        this.bcdbAuthzId = "bcdbauthzid-";
        this.connection = new driver.Connection(bigchaindbUrl, {
            app_id: appId,
            app_key: appKey
        });
    }
    /**
     * Generate a unique AuthzAsset identifier.
     * @returns {string} The generated AuthzAssetId.
     */
    generateAuthzAssetId() {
        return this.bcdbAuthzId + "-" + this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4();
    }
    /**
     * Generate keypair with bip39
     * @param {string} keySeed - The seed that will be used to create a keypair using bip39.
     * @returns {any} The generated keypair.
     */
    generateKeyByBip39(keySeed) {
        return bip39.mnemonicToSeed(keySeed).slice(0, 32);
    }
    /**
     * Thank you https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    /**
     * Create a new asset that should have its authorization controlled on bigchaindb.
     * @param {string} assetKeySeed - The seed that will be used to generate the keypair which will be used to update the asset in the future.
     * @returns {Promise<AuthzAsset>} The newly created AuthzAsset wrapped in a promise.
     */
    createAsset(assetKeySeed) {
        return new Promise((resolve, reject) => {
            try {
                // Generate an identity with the supplied assetKey.
                let identity = this.generateKeyByBip39(assetKeySeed);
                // Generate a new identity for the AuthzAsset.
                let authId = this.generateAuthzAssetId();
                // Wrap the AuthzAssetId in an asset object
                const assetData = {
                    "bcdbauthzid": authId,
                };
                // Construct a new create transaction to add the asset to the bigchaindb.
                const newCreateTransaction = this.connection.Transaction.makeCreateTransaction(assetData, 
                // A transaction needs an output
                [driver.Transaction.makeOutput(driver.Transaction.makeEd25519Condition(identity.publicKey))
                ], identity.publicKey);
                // Sign the transaction with the supplied identity.
                const signedTransaction = driver.Transaction.signTransaction(newCreateTransaction, identity.privateKey);
                // Post the transaction to the bigchaindb.
                this.connection.postTransaction(signedTransaction).then(signedTransaction => {
                    // Wait for the transaction to complete and return it.
                    return this.connection.pollStatusAndFetchTransaction(signedTransaction.id);
                }).then(response => {
                    resolve(response);
                });
            }
            catch (error) {
                // An error has occured, let the reject function handle the rest.
                reject(new Error(error));
            }
        });
    }
    /**
     * Return an asset from the bigchaindb by using its ID.
     * @param assetId
     */
    getAsset(assetId) {
        return new Promise((resolve, reject) => {
            reject(new Error("Not implemented yet."));
        });
    }
    searchAssetsByBcdbAuthzId(bcdbAuthzId) {
        return new Promise((resolve, reject) => {
            reject(new Error("Not implemented yet."));
        });
    }
    updateAsset(asset, authzOperation) {
        return new Promise((resolve, reject) => {
            reject(new Error("Not implemented yet."));
        });
    }
    getAssetPersmissionsByPerson(personId) {
        return new Promise((resolve, reject) => {
            reject(new Error("Not implemented yet."));
        });
    }
    updateAssetKey(oldKeySeed, newKeySeed) {
        return new Promise((resolve, reject) => {
            reject(new Error("Not implemented yet."));
        });
    }
}
exports.BCDBAuthz = BCDBAuthz;
