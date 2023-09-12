import {Uint128, Addr, AssetInfo, Decimal, CallbackMsg, HopSwapRequest, SwapType, Asset, SimulatedTrade} from "./types";
export interface InstantiateMsg {
  dexter_vault: string;
}
export type ExecuteMsg = {
  execute_multihop_swap: {
    minimum_receive?: Uint128 | null;
    offer_amount: Uint128;
    recipient?: Addr | null;
    requests: HopSwapRequest[];
  };
} | {
  callback: CallbackMsg;
};
export type QueryMsg = {
  config: {};
} | {
  simulate_multihop_swap: {
    amount: Uint128;
    multiswap_request: HopSwapRequest[];
    swap_type: SwapType;
  };
};
export interface MigrateMsg {}
export interface ConfigResponse {
  dexter_vault: string;
}
export type ResponseType = {
  success: {};
} | {
  failure: string;
};
export interface SimulateMultiHopResponse {
  fee: Asset[];
  response: ResponseType;
  swap_operations: SimulatedTrade[];
}