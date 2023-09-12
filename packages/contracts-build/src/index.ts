import {
  KeeperTypes,
  LpTokenTypes,
  MultiStakingTypes,
  RouterTypes,
  StablePoolTypes,
  VaultTypes,
  WeightedPoolTypes,
} from "../../contracts-sdk/src/index";

import { readFileSync } from "fs";
import path from "path";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export type ContractName =
  | "keeper"
  | "lp_token"
  | "multi_staking"
  | "router"
  | "stable_pool"
  | "vault"
  | "weight_pool";

export type InstantiateMsg =
  | KeeperTypes.InstantiateMsg
  | LpTokenTypes.InstantiateMsg
  | MultiStakingTypes.InstantiateMsg
  | RouterTypes.InstantiateMsg
  | StablePoolTypes.InstantiateMsg
  | VaultTypes.InstantiateMsg
  | WeightedPoolTypes.InstantiateMsg;

const contractDir = path.join(path.dirname(module.filename), "..", "data");

export const getContractDir = (name: ContractName) => {
  return path.join(contractDir, name + ".wasm");
};

export const deployContract = async (
  client: SigningCosmWasmClient,
  senderAddress: string,
  contractName: ContractName,
  msg: InstantiateMsg,
  label?: string,
  admin?: string
) => {
  // upload and instantiate the contract
  const wasmBytecode = readFileSync(getContractDir(contractName));
  const uploadRes = await client.upload(senderAddress, wasmBytecode, "auto");
  const initRes = await client.instantiate(
    senderAddress,
    uploadRes.codeId,
    msg ?? {},
    label ?? contractName,
    "auto",
    { admin }
  );
  return { ...uploadRes, ...initRes };
};

export const uploadContract = async (
  client: SigningCosmWasmClient,
  senderAddress: string,
  contractName: ContractName
) => {
  // upload and instantiate the contract
  const wasmBytecode = readFileSync(getContractDir(contractName));
  const uploadRes = await client.upload(senderAddress, wasmBytecode, "auto");

  return { ...uploadRes };
};

export const instantiateContract = async (
  client: SigningCosmWasmClient,
  senderAddress: string,
  codeId: number,
  msg: InstantiateMsg,
  label?: string,
  admin?: string
) => {
  const initRes = await client.instantiate(
    senderAddress,
    codeId,
    msg ?? {},
    label ?? "",
    "auto",
    { admin }
  );
  return { ...initRes };
};
