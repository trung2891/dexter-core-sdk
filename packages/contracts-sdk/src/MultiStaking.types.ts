import {Addr, Uint128, Binary, ReviewProposedRewardSchedule, Cw20ReceiveMsg, TokenLock, AssetInfo, ArrayOfAddr, Config, CreatorClaimableRewardState, InstantLpUnlockFee, ArrayOfUnlockFeeTier, UnlockFeeTier, ProposedRewardSchedule, Asset, ArrayOfTokenLock, RewardSchedule, Decimal, AssetRewardState, AssetStakerInfo, TokenLockInfo, ArrayOfUnclaimedReward, UnclaimedReward} from "./types";
export interface InstantiateMsg {
  fee_tier_interval: number;
  instant_unbond_fee_bp: number;
  instant_unbond_min_fee_bp: number;
  keeper_addr: Addr;
  minimum_reward_schedule_proposal_start_delay: number;
  owner: Addr;
  unlock_period: number;
}
export type ExecuteMsg = {
  update_config: {
    fee_tier_interval?: number | null;
    instant_unbond_fee_bp?: number | null;
    instant_unbond_min_fee_bp?: number | null;
    keeper_addr?: Addr | null;
    minimum_reward_schedule_proposal_start_delay?: number | null;
    unlock_period?: number | null;
  };
} | {
  propose_reward_schedule: {
    description?: string | null;
    end_block_time: number;
    lp_token: Addr;
    start_block_time: number;
    title: string;
  };
} | {
  review_reward_schedule_proposals: {
    reviews: ReviewProposedRewardSchedule[];
  };
} | {
  drop_reward_schedule_proposal: {
    proposal_id: number;
  };
} | {
  allow_lp_token: {
    lp_token: Addr;
  };
} | {
  remove_lp_token: {
    lp_token: Addr;
  };
} | {
  receive: Cw20ReceiveMsg;
} | {
  bond: {
    amount: Uint128;
    lp_token: Addr;
  };
} | {
  unbond: {
    amount?: Uint128 | null;
    lp_token: Addr;
  };
} | {
  instant_unbond: {
    amount: Uint128;
    lp_token: Addr;
  };
} | {
  unlock: {
    lp_token: Addr;
  };
} | {
  instant_unlock: {
    lp_token: Addr;
    token_locks: TokenLock[];
  };
} | {
  withdraw: {
    lp_token: Addr;
  };
} | {
  claim_unallocated_reward: {
    reward_schedule_id: number;
  };
} | {
  propose_new_owner: {
    expires_in: number;
    owner: Addr;
  };
} | {
  claim_ownership: {};
} | {
  drop_ownership_proposal: {};
};
export type QueryMsg = {
  config: {};
} | {
  unclaimed_rewards: {
    block_time?: number | null;
    lp_token: Addr;
    user: Addr;
  };
} | {
  token_locks: {
    block_time?: number | null;
    lp_token: Addr;
    user: Addr;
  };
} | {
  raw_token_locks: {
    lp_token: Addr;
    user: Addr;
  };
} | {
  bonded_lp_tokens: {
    lp_token: Addr;
    user: Addr;
  };
} | {
  instant_unlock_fee: {
    lp_token: Addr;
    token_lock: TokenLock;
    user: Addr;
  };
} | {
  instant_unlock_fee_tiers: {};
} | {
  allowed_l_p_tokens_for_reward: {};
} | {
  owner: {};
} | {
  proposed_reward_schedules: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  proposed_reward_schedule: {
    proposal_id: number;
  };
} | {
  reward_schedules: {
    asset: AssetInfo;
    lp_token: Addr;
  };
} | {
  reward_state: {
    asset: AssetInfo;
    lp_token: Addr;
  };
} | {
  staker_info: {
    asset: AssetInfo;
    lp_token: Addr;
    user: Addr;
  };
} | {
  creator_claimable_reward: {
    reward_schedule_id: number;
  };
};
export type MigrateMsg = {
  v2: {
    fee_tier_interval: number;
    instant_unbond_fee_bp: number;
    instant_unbond_min_fee_bp: number;
    keeper_addr: Addr;
  };
} | {
  v2_1: {};
};
export type ArrayOfProposedRewardSchedulesResponse = ProposedRewardSchedulesResponse[];
export interface ProposedRewardSchedulesResponse {
  proposal: ProposedRewardSchedule;
  proposal_id: number;
}
export type ArrayOfRewardScheduleResponse = RewardScheduleResponse[];
export interface RewardScheduleResponse {
  id: number;
  reward_schedule: RewardSchedule;
}