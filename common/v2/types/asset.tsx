import { BigNumber } from 'ethers/utils';
import { NetworkId, TSymbol, TUuid, AssetSocial } from '@types';
import { Brand } from 'utility-types';

export type TTicker = Brand<string, 'Ticker'>;

export interface Fiat {
  code: string;
  name: string;
  symbol: TSymbol;
  prefix?: boolean;
}

export interface IAsset {
  symbol: TSymbol;
  name: string;
  network?: string;
}

export type TAssetType = 'base' | 'erc20' | 'fiat';

export interface Asset {
  readonly uuid: TUuid;
  readonly name: string;
  readonly networkId?: NetworkId;
  readonly ticker: string;
  readonly symbol?: TSymbol;
  readonly type: TAssetType;
  readonly contractAddress?: string;
  readonly decimal?: number;
  readonly isCustom?: boolean;
}

export interface ExtendedAsset extends Asset {
  website?: string;
  whitepaper?: string;
  social?: AssetSocial;
  mappings?: {
    coinGeckoId?: string;
    cryptoCompareId?: string;
    coinCapId?: string;
  };
}

export interface ReserveAsset extends Asset {
  reserveExchangeRate: string; // Is a BigNumberJS float string
}

// Used to reference an Asset in a storage Account
export interface AssetBalanceObject {
  readonly uuid: TUuid;
  balance: BigNumber | string;
  mtime: number;
}

export type StoreAsset = ExtendedAsset & {
  balance: BigNumber;
  mtime: number;
  rate?: number;
};
