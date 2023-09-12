/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {Uint128, Addr, AssetInfo, Decimal, CallbackMsg, HopSwapRequest, SwapType, Asset, SimulatedTrade} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, ConfigResponse, ResponseType, SimulateMultiHopResponse} from "./Router.types";
export interface RouterReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  simulateMultihopSwap: ({
    amount,
    multiswapRequest,
    swapType
  }: {
    amount: Uint128;
    multiswapRequest: HopSwapRequest[];
    swapType: SwapType;
  }) => Promise<SimulateMultiHopResponse>;
}
export class RouterQueryClient implements RouterReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.simulateMultihopSwap = this.simulateMultihopSwap.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  simulateMultihopSwap = async ({
    amount,
    multiswapRequest,
    swapType
  }: {
    amount: Uint128;
    multiswapRequest: HopSwapRequest[];
    swapType: SwapType;
  }): Promise<SimulateMultiHopResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      simulate_multihop_swap: {
        amount,
        multiswap_request: multiswapRequest,
        swap_type: swapType
      }
    });
  };
}
export interface RouterInterface extends RouterReadOnlyInterface {
  contractAddress: string;
  sender: string;
  executeMultihopSwap: ({
    minimumReceive,
    offerAmount,
    recipient,
    requests
  }: {
    minimumReceive?: Uint128;
    offerAmount: Uint128;
    recipient?: Addr;
    requests: HopSwapRequest[];
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  callback: (callbackMsg: CallbackMsg, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
}
export class RouterClient extends RouterQueryClient implements RouterInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.executeMultihopSwap = this.executeMultihopSwap.bind(this);
    this.callback = this.callback.bind(this);
  }

  executeMultihopSwap = async ({
    minimumReceive,
    offerAmount,
    recipient,
    requests
  }: {
    minimumReceive?: Uint128;
    offerAmount: Uint128;
    recipient?: Addr;
    requests: HopSwapRequest[];
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute_multihop_swap: {
        minimum_receive: minimumReceive,
        offer_amount: offerAmount,
        recipient,
        requests
      }
    }, $fee, $memo, $funds);
  };
  callback = async (callbackMsg: CallbackMsg, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      callback: callbackMsg
    }, $fee, $memo, $funds);
  };
}