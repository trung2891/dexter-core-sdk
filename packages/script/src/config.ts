import {
  KeeperTypes,
  LpTokenTypes,
  MultiStakingTypes,
  RouterTypes,
  StablePoolTypes,
  VaultTypes,
  WeightedPoolTypes,
} from "../../contracts-sdk/src/index";

interface Config {
  contractAdmin: string;
  keeperInitMsg: KeeperTypes.InstantiateMsg;
  multiStakingInitMsg: MultiStakingTypes.InstantiateMsg;
  routerInitMsg: RouterTypes.InstantiateMsg;
  lpTokenInitMsg: LpTokenTypes.InstantiateMsg;
  stablePoolInitMsg: StablePoolTypes.InstantiateMsg;
  vaultInitMsg: VaultTypes.InstantiateMsg;
  weightPoolInitMsg: WeightedPoolTypes.InstantiateMsg;
}

export const config: Config = {
  contractAdmin: "",
  keeperInitMsg: {},
  multiStakingInitMsg: {},
  routerInitMsg: {},
  lpTokenInitMsg: {},
  stablePoolInitMsg: {},
  vaultInitMsg: {},
  weightPoolInitMsg: {},
};
