import { useDefaultLayout } from '@/hooks/useLayout';

const test = () => {
  return (

    <div>test</div>
  )
}

test.getLayout = useDefaultLayout;

export default test