import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from '@/utils/types';
const UploadPage: NextPageWithLayout = () => {
  return (
    <>
    <p className="Label">Upload Page</p>
    </>
  )
   
};
UploadPage.getLayout = useDefaultLayout;

export default UploadPage;
