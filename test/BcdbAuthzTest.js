var mocha = require('mocha');
var BcdbAuthz = require('../dist/BcdbAuthz');

const api_url = "https://localhost:59884/api/v1/";

const KEY_ALICE = "alice";
const KEY_BOB   = "bob"

const bcdbAuthz = new BcdbAuthz(api_url);

describe("BcdbAuthz.js", function() {

    describe("Creating assets", function() {

        it("should return a new AuthzAsset", function(done) {
            bcdbAuthz.createAsset(KEY_ALICE).then( response => {

                // Check if it is an AuthzAsset.
                if (typeof response.assetId != "undefined" && typeof response.bcdbAuthzId != "undefined") done();

                throw new Error("Creating asset failed. Response was: " + JSON.stringify(response));

            }).catch(error => {
                done(new Error(error));
            })
        });

    });
});