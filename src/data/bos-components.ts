import type { NetworkId } from '@/utils/types';

type NetworkComponents = {
  loginWeb3: string;
  profileImage: string;
  home: string;
  waifu: string;
  imageUploader: string;
  chat: string ;
};

export const componentsByNetworkId: Record<NetworkId, NetworkComponents | undefined> = {
  testnet: {
    loginWeb3: 'kan_k.testnet/widget/LoginWeb3',
    profileImage: 'kan_k.testnet/widget/UserProfilePicture',
    home: 'kan_k.testnet/widget/TestnetHome',
    waifu: 'kan_k.testnet/widget/Main',
    imageUploader: 'kan_k.testnet/widget/Contract',
    chat: 'kan_k.testnet/widget/Chat'
  },

  mainnet: {
    loginWeb3: 'kan_k.near/widget/LoginWeb3',
    profileImage: 'mob.near/widget/ProfileImage',
    home: 'coriolanus.near/widget/Test',
    waifu: 'kan_k.near/widget/try-api',
    imageUploader: 'kan_k.near/widget/ImageUploader',
    chat: ''
  },
};
