require('dotenv').config();
const algosdk = require('algosdk');

// Conectarse a Algorand usando Purestake API
const algodToken = process.env.ALGOD_TOKEN;
const algodServer = process.env.ALGOD_SERVER;
const algodPort = process.env.ALGOD_PORT;

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// Recuperar la clave privada a partir del mnemonico
const mnemonic = process.env.MNEMONIC;
const account = algosdk.mnemonicToSecretKey(mnemonic);

// Crear el ASA (NFT) en Algorand
async function createNFT() {
    try {
        const params = await algodClient.getTransactionParams().do();
        params.fee = 1000;

        const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
            sender: account.addr,
            total: 1,
            decimals: 0,
            assetName: "MyNFT",
            unitName: "NFT",
            assetURL: "https://ipfs.io/ipfs/bafkreiczwbnadwftixmefvvxutpedz6szsmdeh67rmoeogj4yuxonewtpy",
            assetMetadataHash: undefined,  // Se puede incluir un hash de metadata aquí si se desea
            suggestedParams: params
        });

        const signedTxn = txn.signTxn(account.sk);
        const sendTx = await algodClient.sendRawTransaction(signedTxn).do();
        console.log("Transacción enviada con ID: ", sendTx.txid);

        const confirmedTxn = await algosdk.waitForConfirmation(algodClient, sendTx.txid, 4);
        
        console.log("ASA creado en el bloque: ", confirmedTxn.confirmedRound);
        console.log("ID del NFT: ", confirmedTxn.assetIndex);
    } catch (error) {
        console.error("Error creando el NFT: ", error);
    }
}

createNFT();