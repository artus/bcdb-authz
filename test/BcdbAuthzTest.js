var mocha = require('mocha');
var bcdb_authz = require('../dist/BcdbAuthz');

const api_url = "https://localhost:59984/api/v1/";

const KEY_ALICE = "alice";
const KEY_BOB = "bob"

describe("BcdbAuthz.js", function () {

    // Set timeout to 60 seconds because BigchainDB is sloooooow
    this.timeout(60000);

    describe("Constructor", function () {

        it("Should not fail when providing correct information", function (done) {
            try {
                var newBcdbAuthz = new bcdb_authz.BcdbAuthz(api_url);
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
            var bcdbAuthz = new bcdb_authz.BcdbAuthz(api_url);

            bcdbAuthz.createAsset(KEY_ALICE).then(response => {

                console.log("Got response from bcdb.");

                // Check if it is an AuthzAsset.
                if (typeof response.assetId != "undefined" && typeof response.bcdbAuthzId != "undefined") done();

                throw new Error("Creating asset failed. Response was: " + JSON.stringify(response));

            }).catch(error => {
                done(new Error(error));
            })
        });

    });
});