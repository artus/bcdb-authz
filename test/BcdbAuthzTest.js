const mocha = require('mocha');
const bcdb_authz = require('../dist/BcdbAuthz');
const assert = require("assert");

const api_url = "http://localhost:59984/api/v1/";

const SEED_ALICE = "alice";
const SEED_BOB = "bob"

let bcdbAuthz = new bcdb_authz.BcdbAuthz(api_url);

describe("BcdbAuthz.js", function () {

    // Set timeout to 10 seconds because BigchainDB is sloooooow
    this.timeout(10000);

    describe("Constructor", function () {

        it("Should not fail when providing correct information", function (done) {
            try {
                // Create a new BcdbAuthz instance.
                let newBcdbAuthz = new bcdb_authz.BcdbAuthz(api_url);

                // Check if initialization was succesful.
                if (typeof newBcdbAuthz == "undefined") throw new Error("Initializing new BcdbAuthz results in undefined object.");

                done();
            }
            catch (error) {
                done(new Error(error));
            }
        });
    });

    describe("Creating assets", function () {

        it("should return a new AuthzAsset", function (done) {

            // Create identity from keyseed
            let KEY_ALICE = bcdbAuthz.generateKeyByBip39(SEED_ALICE);

            // Call the create asset method, which will return a promise.
            bcdbAuthz.createAsset(KEY_ALICE).then(response => {

                // Check if it is an AuthzAsset.
                if (response.assetId == undefined && response.bcdbAuthzId == undefined)
                    throw new Error("Creating asset failed. Response was: " + JSON.stringify(response));

                done();

            }).catch(error => {
                done(new Error(error));
            })
        });

        it("should store the created asset on the BigchainDB network/node", async function () {

            // Create a new asset and query the library by its ID.
            let newAsset = await bcdbAuthz.createAssetByKeySeed(SEED_ALICE);
            let returnedAsset = await bcdbAuthz.getAsset(newAsset.assetId);

            assert.deepEqual(newAsset, returnedAsset);
        });

        it("should fail when no public key is supplied", async function (done) {

            try {
                let newAsset = await bcdbAuthz.createAsset();
                done(new Error("Providing empty keypair does not result in error."));
            }
            catch (error) {
                done();
            }

        });

        it("should fail when no keyseed is supplied", async function (done) {

            try {
                let newAsset = await bcdbAuthz.createAssetByKeySeed();
                done(new Error("Providing empty keyseed does not result in error."));
            } catch (error) {
                done();
            }
        });

    });
});