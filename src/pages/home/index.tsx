import { NextPageWithLayout } from "@/utils/types";
import { useDefaultLayout } from "@/hooks/useLayout";
import { useSignInRedirect } from '@/hooks/useSignInRedirect';
import { useAuthStore } from '@/stores/auth';
import styled from 'styled-components';
import { Text } from '@/components/lib/Text';

const Button = styled.header`
  button {
    background: #000;
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 10rem;
    cursor: pointer;
  }
`;

const HomePage: NextPageWithLayout = () => {
  const signedIn = useAuthStore((store) => store.signedIn);
  const accountId = useAuthStore((store) => store.accountId);
  const logOut = useAuthStore((store) => store.logOut);
  const { requestAuthentication } = useSignInRedirect();

  return (
    <>
      <div
        id="stage"
        className="-z-10 fixed m-4 rounded-lg top-0 bottom-0 left-0 right-0 overflow-hidden System-background-secondary"
      >
         <div className="m-4 z-40 fixed w-1/5">
          {signedIn ? (
            <>
              <p className="text-white">{accountId}</p>
              <button type="button" onClick={logOut} className="z-50 text-white">
                Log Out
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={() => requestAuthentication()} className="z-50 text-white m-2">
                Sign In
              </button>
              <button type="button" onClick={() => requestAuthentication(true)} className="z-50 text-white">
                Create Account
              </button>
            </>
          )}
         </div>
      </div>

      <div
        id="safe-area"
        className="-z-20 fixed top-0 bottom-0 left-0 right-0 overflow-hidden bg-black"
      >
        <div
          id="panel"
          className="VStack rounded-lg gap-1 p-4 m-4 w-1/5 top-0 bottom-0 left-0 right-0 absolute -z-10 System-background Label"
        >
          <a href="">Home</a>
          <a href="">Short</a>
          <a href="">Subscriptions</a>
        </div>
      </div>
    </>
  );
};

// HomePage.getLayout = useDefaultLayout;

export default HomePage;
