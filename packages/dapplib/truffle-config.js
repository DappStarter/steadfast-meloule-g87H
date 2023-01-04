require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn pumpkin grace gloom tail supply'; 
let testAccounts = [
"0x852e17aa7c5cfee26f32bf9184f79793326765bc17bdf787132cfdb16380013a",
"0x1cbee95355226bf4c696901273b60e5b6cf8371a7cacf2e7929d3e9019908abb",
"0xc5683765d717e9caece74c52fb5d6503793fa65c3e6a38e6a55f3a19dedf7acf",
"0x29476fe1a412c91355a35710b2814b49b616621262fc2a69dbbe97da8d75d049",
"0x8f68645726e7ab6b741dabb1307f9631cb319a38b2a76202401b7460a401bd4b",
"0x53d753f9b2f99366666731f9de2f93eae01e4f65f8c0af0a77ba23da5cdc4910",
"0xcbb119b47d2d24f43c294f30336a79d88a80e4b03288869cf750dcac0265e6cf",
"0xb6ad285f7102c712e883440023ab28c648f3cf4abc3b51c02af0692a00db2dd8",
"0x4828ab01f69ddb92b62e099be7922524d488d7048c9df92e22167d363bded832",
"0x95819727a8f0e4ae98467f170b5f83abce800434cce7f5d9715b20037c6ca7ba"
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

