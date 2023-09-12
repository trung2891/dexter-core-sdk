import {Addr, Uint128, AssetInfo, Asset, Description} from "./types";
export interface InstantiateMsg {
  owner: Addr;
  vault_address: Addr;
}
export type ExecuteMsg = {
  withdraw: {
    amount: Uint128;
    asset: AssetInfo;
    recipient?: Addr | null;
  };
} | {
  exit_l_p_tokens: {
    amount: Uint128;
    lp_token_address: string;
    min_assets_received?: Asset[] | null;
  };
} | {
  swap_asset: {
    ask_asset_info: AssetInfo;
    min_ask_amount?: Uint128 | null;
    offer_asset: Asset;
    pool_id: Uint128;
  };
} | {
  propose_new_owner: {
    expires_in: number;
    owner: string;
  };
} | {
  drop_ownership_proposal: {};
} | {
  claim_ownership: {};
};
export type QueryMsg = {
  config: {};
} | {
  balances: {
    assets: AssetInfo[];
  };
};
export interface BalancesResponse {
  balances: Asset[];
}