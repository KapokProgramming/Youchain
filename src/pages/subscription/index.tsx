import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from '@/utils/types';
const SubscriptionPage: NextPageWithLayout = () => {
  return (
    <>
    <p className="Label">Sub Page</p>
    </>
  )
   
};
SubscriptionPage.getLayout = useDefaultLayout;

export default SubscriptionPage;
