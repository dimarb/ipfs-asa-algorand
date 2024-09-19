require('dotenv').config();
const { PinataSDK } = require('pinata-web3');
const fs = require('fs').promises;
const path = require('path');

const pinataObj = new PinataSDK({
    pinataJwt : process.env.PINATA_JWT, 
    pinataGateway: process.env.PINATA_GATEWAY
});

// Subir imagen a Piñata
async function uploadImageToPinata(imagePath) {
    const fileBuffer =  await fs.readFile(imagePath);
    const base64Image =  fileBuffer.toString('base64');

    try {
        const result = await pinataObj.upload.base64(base64Image).addMetadata({ name : "MiAlgorandLogo.png" });
        console.log('Imagen subida con hash IPFS: ', result);
        return result.IpfsHash;
    } catch (error) {
        console.error('Error subiendo la imagen a Pinata: ', error);
    }
}

// Subir metadata a Piñata
async function uploadMetadataToPinata(metadata) {
    try {
        const result = await pinataObj.upload.json(metadata);
        console.log('Metadata subida con hash IPFS: ', result);
        return result.IpfsHash;
    } catch (error) {
        console.error('Error subiendo metadata a Pinata: ', error);
    }
}

// Ejemplo de uso
async function main() {
    const imageHash = await uploadImageToPinata(path.join(__dirname, 'algorand_token.png'));

    const metadata = {
        name: "MyNFT",
        description: "Este es mi primer NFT en Algorand",
        image: `https://ipfs.io/ipfs/${imageHash}`, // Link a la imagen en IPFS
        attributes: [
            {
                trait_type: "Rareza",
                value: "Único"
            }
        ]
    };

    const metadataHash = await uploadMetadataToPinata(metadata);
    console.log('URL de metadata: ', `https://ipfs.io/ipfs/${metadataHash}`);
}

main();