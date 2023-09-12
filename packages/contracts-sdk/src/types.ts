export type Uint128 = string;
export type Logo = {
  url: string;
} | {
  embedded: EmbeddedLogo;
};
export type EmbeddedLogo = {
  svg: Binary;
} | {
  png: Binary;
};
export type Binary = string;
export interface Cw20Coin {
  address: string;
  amount: Uint128;
}
export interface InstantiateMarketingInfo {
  description?: string | null;
  logo?: Logo | null;
  marketing?: string | null;
  project?: string | null;
}
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface AllowanceInfo {
  allowance: Uint128;
  expires: Expiration;
  spender: string;
}
export interface SpenderAllowanceInfo {
  allowance: Uint128;
  expires: Expiration;
  owner: string;
}
export type LogoInfo = {
  url: string;
} | "embedded";
export type Addr = string;
export type AssetInfo = {
  token: {
    contract_addr: Addr;
  };
} | {
  native_token: {
    denom: string;
  };
};
export interface Asset {
  amount: Uint128;
  info: AssetInfo;
}
export interface Description {
  owner: Addr;
  vault_address: Addr;
}
export type PoolType = {
  stable_swap: {};
} | {
  weighted: {};
} | {
  custom: string;
};
export interface FeeStructs {
  total_fee_bps: number;
}
export interface NativeAssetPrecisionInfo {
  denom: string;
  precision: number;
}
export interface DescriptionUpdateUpdatableParametersRelatedToPoolSConfiguration {
  update_config: {
    params: Binary;
  };
}
export interface DescriptionUpdateTotalFeeBps {
  update_fee: {
    total_fee_bps: number;
  };
}
export interface DescriptionExecutableOnlyByDexterVaultUpdatesLocallyStoredAssetBalancesStateForThePoolAndUpdatesTheTWAP {
  update_liquidity: {
    assets: Asset[];
  };
}
export type ExitType = {
  exact_lp_burn: Uint128;
} | {
  exact_assets_out: Asset[];
};
export type Decimal = string;
export type SwapType = {
  give_in: {};
} | {
  give_out: {};
} | {
  custom: string;
};
export interface DescriptionReturnsTheCurrentConfigurationOfThePool {
  config: {};
}
export interface DescriptionReturnsPoolIDWhichIsOfTypeUint128 {
  pool_id: {};
}
export interface DescriptionHelperStructForQueryMsgCumulativePrice {
  exchange_info: AssetExchangeRate;
  total_share: Uint128;
}
export interface AssetExchangeRate {
  ask_info: AssetInfo;
  offer_info: AssetInfo;
  rate: Uint128;
}
export interface DescriptionHelperStructForQueryMsgCumulativePrices {
  exchange_infos: AssetExchangeRate[];
  total_share: Uint128;
}
export interface Trade {
  amount_in: Uint128;
  amount_out: Uint128;
  spread: Uint128;
}
export type CallbackMsg = {
  continue_hop_swap: {
    minimum_receive: Uint128;
    offer_asset: AssetInfo;
    prev_ask_amount: Uint128;
    recipient: Addr;
    requests: HopSwapRequest[];
  };
};
export interface HopSwapRequest {
  asset_in: AssetInfo;
  asset_out: AssetInfo;
  belief_price?: Decimal | null;
  max_spread?: Decimal | null;
  pool_id: Uint128;
}
export interface SimulatedTrade {
  asset_in: AssetInfo;
  asset_out: AssetInfo;
  offered_amount: Uint128;
  pool_id: Uint128;
  received_amount: Uint128;
}
export interface ReviewProposedRewardSchedule {
  approve: boolean;
  proposal_id: number;
}
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export interface TokenLock {
  amount: Uint128;
  unlock_time: number;
}
export type ArrayOfAddr = Addr[];
export interface Config {
  allowed_lp_tokens: Addr[];
  fee_tier_interval: number;
  instant_unbond_fee_bp: number;
  instant_unbond_min_fee_bp: number;
  keeper: Addr;
  minimum_reward_schedule_proposal_start_delay: number;
  owner: Addr;
  unlock_period: number;
}
export interface CreatorClaimableRewardState {
  amount: Uint128;
  claimed: boolean;
  last_update: number;
}
export interface InstantLpUnlockFee {
  time_until_lock_expiry: number;
  unlock_amount: Uint128;
  unlock_fee: Uint128;
  unlock_fee_bp: number;
}
export type ArrayOfUnlockFeeTier = UnlockFeeTier[];
export interface UnlockFeeTier {
  seconds_till_unlock_end: number;
  seconds_till_unlock_start: number;
  unlock_fee_bp: number;
}
export interface ProposedRewardSchedule {
  asset: Asset;
  description?: string | null;
  end_block_time: number;
  lp_token: Addr;
  proposer: Addr;
  rejected: boolean;
  start_block_time: number;
  title: string;
}
export type ArrayOfTokenLock = TokenLock[];
export interface RewardSchedule {
  amount: Uint128;
  asset: AssetInfo;
  creator: Addr;
  end_block_time: number;
  staking_lp_token: Addr;
  start_block_time: number;
  title: string;
}
export interface AssetRewardState {
  last_distributed: number;
  reward_index: Decimal;
}
export interface AssetStakerInfo {
  asset: AssetInfo;
  pending_reward: Uint128;
  reward_index: Decimal;
}
export interface TokenLockInfo {
  locks: TokenLock[];
  unlocked_amount: Uint128;
}
export type ArrayOfUnclaimedReward = UnclaimedReward[];
export interface UnclaimedReward {
  amount: Uint128;
  asset: AssetInfo;
}
export type AutoStakeImpl = "none" | {
  multistaking: {
    contract_addr: Addr;
  };
};
export type AllowPoolInstantiation = "everyone" | "only_whitelisted_addresses" | "nobody";
export type PoolCreationFee = "disabled" | {
  enabled: {
    fee: Asset;
  };
};
export interface PoolTypeConfig {
  allow_instantiation: AllowPoolInstantiation;
  code_id: number;
  default_fee_info: FeeInfo;
  paused: PauseInfo;
  pool_type: PoolType;
}
export interface FeeInfo {
  protocol_fee_percent: number;
  total_fee_bps: number;
}
export interface PauseInfo {
  deposit: boolean;
  imbalanced_withdraw: boolean;
  swap: boolean;
}
export type PauseInfoUpdateType = {
  pool_id: Uint128;
} | {
  pool_type: PoolType;
};
export interface SingleSwapRequest {
  amount: Uint128;
  asset_in: AssetInfo;
  asset_out: AssetInfo;
  belief_price?: Decimal | null;
  max_spread?: Decimal | null;
  pool_id: Uint128;
  swap_type: SwapType;
}
export interface DescriptionThisStructDescribesTheMainControlConfigOfVault {
  auto_stake_impl: AutoStakeImpl;
  fee_collector?: Addr | null;
  lp_token_code_id?: number | null;
  next_pool_id: Uint128;
  owner: Addr;
  paused: PauseInfo;
  pool_creation_fee: PoolCreationFee;
  whitelisted_addresses: Addr[];
}
export interface PoolInfo {
  assets: Asset[];
  fee_info: FeeInfo;
  lp_token_addr: Addr;
  paused: PauseInfo;
  pool_addr: Addr;
  pool_id: Uint128;
  pool_type: PoolType;
}
export type NullablePoolTypeConfig = PoolTypeConfig | null;