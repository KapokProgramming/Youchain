import type { NetworkId } from '@/utils/types';

type NetworkComponents = {
  loginWeb3: string;
  profileImage: string;
  profileBanner: string;
  videoCard: string;
};

export const componentsByNetworkId: Record<NetworkId, NetworkComponents | undefined> = {
  testnet: {
    loginWeb3: 'kan_k.testnet/widget/LoginWeb3',
    profileImage: 'kan_k.testnet/widget/UserProfilePicture',
    profileBanner: 'kan_k.testnet/widget/ProfileBanner',
    videoCard: 'kan_k.testnet/widget/VideoCard'
  },

  mainnet: {
    loginWeb3: 'kan_k.near/widget/LoginWeb3',
    profileImage: 'mob.near/widget/ProfileImage',
    profileBanner: 'kan_k.near/widget/ProfileBanner',
    videoCard: 'kan_k.near/widget/VideoCard',
  },
};
