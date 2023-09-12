import {AssetInfo, Addr, Binary, Uint128, PoolType, FeeStructs, NativeAssetPrecisionInfo, DescriptionUpdateUpdatableParametersRelatedToPoolSConfiguration, DescriptionUpdateTotalFeeBps, DescriptionExecutableOnlyByDexterVaultUpdatesLocallyStoredAssetBalancesStateForThePoolAndUpdatesTheTWAP, Asset, ExitType, Decimal, SwapType, DescriptionReturnsTheCurrentConfigurationOfThePool, DescriptionReturnsPoolIDWhichIsOfTypeUint128, DescriptionHelperStructForQueryMsgCumulativePrice, AssetExchangeRate, DescriptionHelperStructForQueryMsgCumulativePrices, Description, Trade} from "./types";
export interface InstantiateMsg {
  asset_infos: AssetInfo[];
  fee_info: FeeStructs;
  init_params?: Binary | null;
  lp_token_addr: Addr;
  native_asset_precisions: NativeAssetPrecisionInfo[];
  pool_id: Uint128;
  pool_type: PoolType;
  vault_addr: Addr;
}
export type ExecuteMsg = DescriptionUpdateUpdatableParametersRelatedToPoolSConfiguration | DescriptionUpdateTotalFeeBps | DescriptionExecutableOnlyByDexterVaultUpdatesLocallyStoredAssetBalancesStateForThePoolAndUpdatesTheTWAP;
export type QueryMsg = DescriptionReturnsTheCurrentConfigurationOfThePool | DescriptionReturnsInformationAboutTheFeesSettingsInAFeeResponseObject | DescriptionReturnsPoolIDWhichIsOfTypeUint128 | DescriptionReturnsAfterJoinResponseTypeWhichContainsReturnAssetsInfoNumberOfLPSharesToBeMintedTheResponseOfTypeResponseType | DescriptionReturnsAfterExitResponseTypeWhichContainsAssetsOutInfoNumberOfLPSharesToBeBurntTheResponseOfTypeResponseType | DescriptionReturnsSwapResponseTypeWhichContainsTradeParamsInfoTheResponseOfTypeResponseTypeAndFeeOfTypeOptionAssetWhichIsTheFeeToBeCharged | DescriptionReturnsInformationAboutTheCumulativePriceOfTheAssetInACumulativePriceResponseObject | DescriptionReturnsInformationAboutTheCumulativePricesInACumulativePricesResponseObject;
export interface DescriptionReturnsInformationAboutTheFeesSettingsInAFeeResponseObject {
  fee_params: {};
}
export interface DescriptionReturnsAfterJoinResponseTypeWhichContainsReturnAssetsInfoNumberOfLPSharesToBeMintedTheResponseOfTypeResponseType {
  on_join_pool: {
    assets_in?: Asset[] | null;
    mint_amount?: Uint128 | null;
  };
}
export interface DescriptionReturnsAfterExitResponseTypeWhichContainsAssetsOutInfoNumberOfLPSharesToBeBurntTheResponseOfTypeResponseType {
  on_exit_pool: {
    exit_type: ExitType;
  };
}
export interface DescriptionReturnsSwapResponseTypeWhichContainsTradeParamsInfoTheResponseOfTypeResponseTypeAndFeeOfTypeOptionAssetWhichIsTheFeeToBeCharged {
  on_swap: {
    amount: Uint128;
    ask_asset: AssetInfo;
    belief_price?: Decimal | null;
    max_spread?: Decimal | null;
    offer_asset: AssetInfo;
    swap_type: SwapType;
  };
}
export interface DescriptionReturnsInformationAboutTheCumulativePriceOfTheAssetInACumulativePriceResponseObject {
  cumulative_price: {
    ask_asset: AssetInfo;
    offer_asset: AssetInfo;
  };
}
export interface DescriptionReturnsInformationAboutTheCumulativePricesInACumulativePricesResponseObject {
  cumulative_prices: {};
}
export interface MigrateMsg {}
export interface ConfigResponse {
  additional_params?: Binary | null;
  assets: Asset[];
  block_time_last: number;
  fee_info: FeeStructs;
  lp_token_addr: Addr;
  math_params?: Binary | null;
  pool_id: Uint128;
  pool_type: PoolType;
  vault_addr: Addr;
}
export type ResponseType = {
  success: {};
} | {
  failure: string;
};
export interface DescriptionHelperStructForQueryMsgOnExitPool {
  assets_out: Asset[];
  burn_shares: Uint128;
  fee?: Asset[] | null;
  response: ResponseType;
}
export interface DescriptionHelperStructForQueryMsgOnJoinPool {
  fee?: Asset[] | null;
  new_shares: Uint128;
  provided_assets: Asset[];
  response: ResponseType;
}
export interface DescriptionHelperStructForQueryMsgOnSwap {
  fee?: Asset | null;
  response: ResponseType;
  trade_params: Trade;
}