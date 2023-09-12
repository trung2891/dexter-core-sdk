/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {AssetInfo, Addr, Binary, Uint128, PoolType, FeeStructs, NativeAssetPrecisionInfo, DescriptionUpdateUpdatableParametersRelatedToPoolSConfiguration, DescriptionUpdateTotalFeeBps, DescriptionExecutableOnlyByDexterVaultUpdatesLocallyStoredAssetBalancesStateForThePoolAndUpdatesTheTWAP, Asset, ExitType, Decimal, SwapType, DescriptionReturnsTheCurrentConfigurationOfThePool, DescriptionReturnsPoolIDWhichIsOfTypeUint128, DescriptionHelperStructForQueryMsgCumulativePrice, AssetExchangeRate, DescriptionHelperStructForQueryMsgCumulativePrices, Description, Trade} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, DescriptionReturnsInformationAboutTheFeesSettingsInAFeeResponseObject, DescriptionReturnsAfterJoinResponseTypeWhichContainsReturnAssetsInfoNumberOfLPSharesToBeMintedTheResponseOfTypeResponseType, DescriptionReturnsAfterExitResponseTypeWhichContainsAssetsOutInfoNumberOfLPSharesToBeBurntTheResponseOfTypeResponseType, DescriptionReturnsSwapResponseTypeWhichContainsTradeParamsInfoTheResponseOfTypeResponseTypeAndFeeOfTypeOptionAssetWhichIsTheFeeToBeCharged, DescriptionReturnsInformationAboutTheCumulativePriceOfTheAssetInACumulativePriceResponseObject, DescriptionReturnsInformationAboutTheCumulativePricesInACumulativePricesResponseObject, MigrateMsg, ConfigResponse, ResponseType, DescriptionHelperStructForQueryMsgOnExitPool, DescriptionHelperStructForQueryMsgOnJoinPool, DescriptionHelperStructForQueryMsgOnSwap} from "./WeightedPool.types";
export interface WeightedPoolReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  feeParams: () => Promise<Description>;
  poolId: () => Promise<Uint128>;
  onJoinPool: ({
    assetsIn,
    mintAmount
  }: {
    assetsIn?: Asset[];
    mintAmount?: Uint128;
  }) => Promise<DescriptionHelperStructForQueryMsgOnJoinPool>;
  onExitPool: ({
    exitType
  }: {
    exitType: ExitType;
  }) => Promise<DescriptionHelperStructForQueryMsgOnExitPool>;
  onSwap: ({
    amount,
    askAsset,
    beliefPrice,
    maxSpread,
    offerAsset,
    swapType
  }: {
    amount: Uint128;
    askAsset: AssetInfo;
    beliefPrice?: Decimal;
    maxSpread?: Decimal;
    offerAsset: AssetInfo;
    swapType: SwapType;
  }) => Promise<DescriptionHelperStructForQueryMsgOnSwap>;
  cumulativePrice: ({
    askAsset,
    offerAsset
  }: {
    askAsset: AssetInfo;
    offerAsset: AssetInfo;
  }) => Promise<DescriptionHelperStructForQueryMsgCumulativePrice>;
  cumulativePrices: () => Promise<DescriptionHelperStructForQueryMsgCumulativePrices>;
}
export class WeightedPoolQueryClient implements WeightedPoolReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.feeParams = this.feeParams.bind(this);
    this.poolId = this.poolId.bind(this);
    this.onJoinPool = this.onJoinPool.bind(this);
    this.onExitPool = this.onExitPool.bind(this);
    this.onSwap = this.onSwap.bind(this);
    this.cumulativePrice = this.cumulativePrice.bind(this);
    this.cumulativePrices = this.cumulativePrices.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  feeParams = async (): Promise<Description> => {
    return this.client.queryContractSmart(this.contractAddress, {
      fee_params: {}
    });
  };
  poolId = async (): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pool_id: {}
    });
  };
  onJoinPool = async ({
    assetsIn,
    mintAmount
  }: {
    assetsIn?: Asset[];
    mintAmount?: Uint128;
  }): Promise<DescriptionHelperStructForQueryMsgOnJoinPool> => {
    return this.client.queryContractSmart(this.contractAddress, {
      on_join_pool: {
        assets_in: assetsIn,
        mint_amount: mintAmount
      }
    });
  };
  onExitPool = async ({
    exitType
  }: {
    exitType: ExitType;
  }): Promise<DescriptionHelperStructForQueryMsgOnExitPool> => {
    return this.client.queryContractSmart(this.contractAddress, {
      on_exit_pool: {
        exit_type: exitType
      }
    });
  };
  onSwap = async ({
    amount,
    askAsset,
    beliefPrice,
    maxSpread,
    offerAsset,
    swapType
  }: {
    amount: Uint128;
    askAsset: AssetInfo;
    beliefPrice?: Decimal;
    maxSpread?: Decimal;
    offerAsset: AssetInfo;
    swapType: SwapType;
  }): Promise<DescriptionHelperStructForQueryMsgOnSwap> => {
    return this.client.queryContractSmart(this.contractAddress, {
      on_swap: {
        amount,
        ask_asset: askAsset,
        belief_price: beliefPrice,
        max_spread: maxSpread,
        offer_asset: offerAsset,
        swap_type: swapType
      }
    });
  };
  cumulativePrice = async ({
    askAsset,
    offerAsset
  }: {
    askAsset: AssetInfo;
    offerAsset: AssetInfo;
  }): Promise<DescriptionHelperStructForQueryMsgCumulativePrice> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cumulative_price: {
        ask_asset: askAsset,
        offer_asset: offerAsset
      }
    });
  };
  cumulativePrices = async (): Promise<DescriptionHelperStructForQueryMsgCumulativePrices> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cumulative_prices: {}
    });
  };
}
export interface WeightedPoolInterface extends WeightedPoolReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateConfig: ({
    params
  }: {
    params: Binary;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  updateFee: ({
    totalFeeBps
  }: {
    totalFeeBps: number;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  updateLiquidity: ({
    assets
  }: {
    assets: Asset[];
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
}
export class WeightedPoolClient extends WeightedPoolQueryClient implements WeightedPoolInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.updateFee = this.updateFee.bind(this);
    this.updateLiquidity = this.updateLiquidity.bind(this);
  }

  updateConfig = async ({
    params
  }: {
    params: Binary;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        params
      }
    }, $fee, $memo, $funds);
  };
  updateFee = async ({
    totalFeeBps
  }: {
    totalFeeBps: number;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_fee: {
        total_fee_bps: totalFeeBps
      }
    }, $fee, $memo, $funds);
  };
  updateLiquidity = async ({
    assets
  }: {
    assets: Asset[];
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_liquidity: {
        assets
      }
    }, $fee, $memo, $funds);
  };
}