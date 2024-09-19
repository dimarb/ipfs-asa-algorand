
# IPFS-ASA-Algorand

## Descripción

Este proyecto tiene como objetivo crear un NFT (Activo Estándar de Algorand - ASA) con metadata almacenada en IPFS (InterPlanetary File System). Utiliza la blockchain de Algorand para emitir los activos y aprovecha el almacenamiento descentralizado de IPFS para gestionar la metadata de los NFT, garantizando transparencia y seguridad en la cadena de suministro de datos.

## Características

- **Blockchain**: Algorand se utiliza como la infraestructura blockchain para emitir los activos.
- **Almacenamiento Descentralizado**: IPFS se emplea para almacenar la metadata del NFT, aprovechando su sistema distribuido.
- **Pinata**: Se utiliza Pinata como proveedor de servicios IPFS para cargar y fijar la metadata de forma eficiente.
- **NFT**: Implementación del estándar ASA (Algorand Standard Asset) para la creación de NFT.

## Instalación

1. Clonar este repositorio:
   \`\`\`bash
   git clone https://github.com/usuario/ipfs-asa-algorand.git
   cd ipfs-asa-algorand
   \`\`\`

2. Instalar las dependencias:
   \`\`\`bash
   npm install
   \`\`\`

3. Configurar variables de entorno en un archivo \`.env\`:
   \`\`\`plaintext
   ALGOD_TOKEN=<algod-token>
   ALGOD_SERVER=<algod-server>
   ALGOD_PORT=<algod-port>
   PINATA_API_KEY=<pinata-api-key>
   PINATA_API_SECRET=<pinata-api-secret>
   \`\`\`

## Dependencias

- **algosdk**: SDK oficial de Algorand para interactuar con la blockchain.
- **dotenv**: Gestiona las variables de entorno de forma segura.
- **pinata-web3**: Interactúa con el servicio Pinata para gestionar archivos en IPFS.

## Uso

El proyecto permite:

1. Crear un ASA (Algorand Standard Asset).
2. Subir la metadata del NFT a IPFS usando Pinata.
3. Asociar la metadata de IPFS al NFT en la blockchain de Algorand.

## Scripts

- **test**: Actualmente no hay pruebas especificadas.

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.

Autor: Dimar Borda