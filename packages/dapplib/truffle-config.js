require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth office puppy install depth forget gasp'; 
let testAccounts = [
"0x32dc0fd48557f73dd41951c037ea4a33d714fd372c232c60fa004f6555fcc06e",
"0x9eabd7b4670a6b407e74dc5ca9c4fb86cc8fe6b1e2696b3f36ed45e5f55570d9",
"0x6fbd31bd3f4f15d868948d0b78c34db47b941ce93ad550a3ae177b99c129e9be",
"0x1bc8174b6437ac05e63e712a27e28908f37c311990fb2105e418bc872be19f49",
"0x7ed0f333354674201ee2078b0c9e0547f7c24ddeedcfc5edc3f6579ed340b4a0",
"0xbd2bad1451b1318bb5b1dbe3af51351b0948d4a266ef67c8d3b80b405689c0f1",
"0xdba063ba9378e0d967423e6858f1eff23ee6eca1afbba8c8deacf62a4ea4df8a",
"0xa14c8b385e394983e6956461e9ab463b331d12977ad73eb1ea1a48ca19b6e148",
"0x1c4025385466b640631def9b7516e99a7cf2244b6d17c0421adc9ee4d5706a55",
"0xf247482a3c08666ee3de03e2af20a2373ecf28592884a9b10c2f4910db7c181c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

