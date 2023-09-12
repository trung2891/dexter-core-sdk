import {AutoStakeImpl, Addr, AllowPoolInstantiation, PoolType, PoolCreationFee, Uint128, AssetInfo, PoolTypeConfig, FeeInfo, PauseInfo, Asset, Binary, PauseInfoUpdateType, Decimal, SwapType, Cw20ReceiveMsg, NativeAssetPrecisionInfo, SingleSwapRequest, DescriptionThisStructDescribesTheMainControlConfigOfVault, PoolInfo, NullablePoolTypeConfig} from "./types";
export interface InstantiateMsg {
  auto_stake_impl: AutoStakeImpl;
  fee_collector?: string | null;
  lp_token_code_id?: number | null;
  owner: string;
  pool_configs: PoolTypeConfig[];
  pool_creation_fee: PoolCreationFee;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  update_config: {
    auto_stake_impl?: AutoStakeImpl | null;
    fee_collector?: string | null;
    lp_token_code_id?: number | null;
    paused?: PauseInfo | null;
    pool_creation_fee?: PoolCreationFee | null;
  };
} | {
  add_address_to_whitelist: {
    address: string;
  };
} | {
  remove_address_from_whitelist: {
    address: string;
  };
} | {
  update_pause_info: {
    pause_info: PauseInfo;
    update_type: PauseInfoUpdateType;
  };
} | {
  update_pool_type_config: {
    allow_instantiation?: AllowPoolInstantiation | null;
    new_fee_info?: FeeInfo | null;
    paused?: PauseInfo | null;
    pool_type: PoolType;
  };
} | {
  add_to_registry: {
    new_pool_type_config: PoolTypeConfig;
  };
} | {
  create_pool_instance: {
    asset_infos: AssetInfo[];
    fee_info?: FeeInfo | null;
    init_params?: Binary | null;
    native_asset_precisions: NativeAssetPrecisionInfo[];
    pool_type: PoolType;
  };
} | {
  update_pool_config: {
    fee_info?: FeeInfo | null;
    paused?: PauseInfo | null;
    pool_id: Uint128;
  };
} | {
  update_pool_params: {
    params: Binary;
    pool_id: Uint128;
  };
} | {
  join_pool: {
    assets?: Asset[] | null;
    auto_stake?: boolean | null;
    min_lp_to_receive?: Uint128 | null;
    pool_id: Uint128;
    recipient?: string | null;
  };
} | {
  swap: {
    max_spend?: Uint128 | null;
    min_receive?: Uint128 | null;
    recipient?: string | null;
    swap_request: SingleSwapRequest;
  };
} | {
  propose_new_owner: {
    expires_in: number;
    new_owner: string;
  };
} | {
  drop_ownership_proposal: {};
} | {
  claim_ownership: {};
};
export type QueryMsg = {
  config: {};
} | {
  query_registry: {
    pool_type: PoolType;
  };
} | {
  get_pool_by_id: {
    pool_id: Uint128;
  };
} | {
  get_pool_by_address: {
    pool_addr: string;
  };
} | {
  get_pool_by_lp_token_address: {
    lp_token_addr: string;
  };
};
export interface MigrateMsg {}