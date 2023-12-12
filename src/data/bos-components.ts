import type { NetworkId } from '@/utils/types';

type NetworkComponents = {
  home: string;
  waifu: string;
  imageUploader: string;
  chat: string ;
};

export const componentsByNetworkId: Record<NetworkId, NetworkComponents | undefined> = {
  testnet: {
    home: 'kan_k.testnet/widget/TestnetHome',
    waifu: 'kan_k.testnet/widget/Main',
    imageUploader: 'kan_k.testnet/widget/Contract',
    chat: 'kan_k.testnet/widget/Chat'
  },

  mainnet: {
    home: 'coriolanus.near/widget/Test',
    waifu: 'kan_k.near/widget/try-api',
    imageUploader: 'kan_k.near/widget/ImageUploader',
    chat: ''
  },
};
