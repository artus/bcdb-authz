<p align="center">
    <img src="./resources/img/logo-small.png">
</p>

[![Build Status](https://travis-ci.org/artus/bcdb-authz.svg?branch=master)](https://travis-ci.org/artusvranken/bcdb-authz)

# bcdb-authz
## Using blockchain as an Authorization layer.

With `bcdb-authz`, you can use BigchainDB as an authorization layer among different peers. Each file  you want to author using `bcdb-authz` gets assigned a unique identifier, which will result in an asset that you can chain transactions on that alter the rights for different users. Users are also identified using a unique identifier, but are not stored as an asset on the BigchainDB network.  
  
This library is still in development, so check back later to see a working version!  

## How does it work?

BigchainDB uses transactions to alter the state of an asset. In this case, a transaction is used to `grant` or `revoke` permissions to a certain user identifier. Iterating over all transactions of a certain asset will result in the latest map containing permissions for each user that was granted permissions. Each transaction also includes a date in the metafield, which enables functionality to look at certain permissions at a specific point in time.
