import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { Playlist } from "@/components/lib/Playlist/index";
import Link from "next/link";
import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useBosComponents } from "@/hooks/useBosComponents";
const MyVideoPage: NextPageWithLayout = () => {
  const components = useBosComponents();

  const videoes = [
    {
      id: "1",
      timestamp: 1702882062,
      title: "Test 20 yr",
      description: "test123",
      owner: "kan_k.near",
      src: "https://youtu.be/pC3dIPpC7JI?si=ERfG4HufLQkyY_j_",
      thumbnail:
        "https://ipfs.near.social/ipfs/bafkreielwwffvkzqquv4gt7n35m47dht53v4sowvy3hyukj4arv4oaymni",
    },
    {
      id: "2",
      timestamp: 1702882062,
      title: "Test 20 yr",
      description: "test123",
      owner: "kan_k.near",
      src: "https://youtu.be/pC3dIPpC7JI?si=ERfG4HufLQkyY_j_",
      thumbnail:
        "https://ipfs.near.social/ipfs/bafkreielwwffvkzqquv4gt7n35m47dht53v4sowvy3hyukj4arv4oaymni",
    }
  ];

  function displayVideoDetails(detail: any) {
    const details = [];
    for (let i = 0; i < videoes.length; i++) {
      details.push(
        <ComponentWrapperPage src={components.videoCard} componentProps={videoes[i]} />
      );
    }
    return details;
  }

  return (
    <>
      <div className="ml-16 mt-10">{displayVideoDetails(videoes)}</div>
    </>
  );
};

MyVideoPage.getLayout = useDefaultLayout;

export default MyVideoPage;
