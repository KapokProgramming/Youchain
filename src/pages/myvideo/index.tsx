import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from '@/utils/types';
const MyVideoPage: NextPageWithLayout = () => {
  return (
    <>
    <p className="Label">MyVideo Page</p>
    </>
  )
   
};
MyVideoPage.getLayout = useDefaultLayout;

export default MyVideoPage;
