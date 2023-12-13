import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from '@/utils/types';
const SubscriberPage: NextPageWithLayout = () => {
  return (
    <>
    <p className="Label">Suber Page</p>
    </>
  )
   
};
SubscriberPage.getLayout = useDefaultLayout;

export default SubscriberPage;
