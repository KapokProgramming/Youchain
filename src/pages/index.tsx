import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from '@/utils/types';
const HomePage: NextPageWithLayout = () => {
  return (
    <>
    <p className="Label">Home Page</p>
    </>
  )
   
};
HomePage.getLayout = useDefaultLayout;

export default HomePage;
