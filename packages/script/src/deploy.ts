import "dotenv/config.js";
import { GasPrice } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { testnet } from "./config";
import {
  deployContract,
  uploadContract,
} from "../../contracts-build/src/index";
// consts
const config = {
  chainId: process.env.CHAIN_ID,
  rpcEndpoint: process.env.RPC,
  prefix: process.env.PREFIX,
};

async function main() {
  const mnemonic = process.env.mnemonic;

  // just check mnemonic has actually been defined
  if (mnemonic === null || mnemonic === undefined) {
    const message = `mnemonic undefined`;

    throw new Error(message);
  }

  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: config.prefix,
  });

  const client = await SigningCosmWasmClient.connectWithSigner(
    config.rpcEndpoint,
    wallet,
    {
      gasPrice: GasPrice.fromString("0.001orai"),
      prefix: config.prefix,
    }
  );

  const [account] = await wallet.getAccounts();

  console.log(`Wallet address from seed: ${account.address}`);
}

main();
