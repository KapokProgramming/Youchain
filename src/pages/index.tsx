import { useBosComponents } from '@/hooks/useBosComponents';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';
import { ComponentWrapperPage } from '@/components/ComponentWrapperPage';

const HomePage: NextPageWithLayout = () => {
  const components = useBosComponents();
  const props =  { label: "Upload Image🫠: " }
  return (
    <>
      <ComponentWrapperPage src={components.home} componentProps={ {name: "Kan"} }/>

      {/* <ComponentWrapperPage src={components.imageUploader} componentProps={props}/> */}
    </>
  )
  
  ;
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
