import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { Button } from "@/components/lib/Button";
import { openToast } from "@/components/lib/Toast";
import { useDefaultLayout } from "@/hooks/useLayout";
import { useSignInRedirect } from "@/hooks/useSignInRedirect";
import { useAuthStore } from "@/stores/auth";
import type { NextPageWithLayout } from "@/utils/types";

import { handleCreateAccount } from "../utils/auth";
import { isValidEmail } from "../utils/form-validation";

const SignInPage: NextPageWithLayout = () => {
  const { requestAuthentication } = useSignInRedirect();

  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();
  const requestSignInWithWallet = useAuthStore(
    (store) => store.requestSignInWithWallet
  );
  const signedIn = useAuthStore((store) => store.signedIn);
  const { redirect } = useSignInRedirect();

  useEffect(() => {
    if (signedIn) {
      redirect();
    }
  }, [redirect, signedIn]);

  const onSubmit = handleSubmit(async (data) => {
    if (!data.email) return;

    try {
      const { publicKey, email } = await handleCreateAccount(
        null,
        data.email,
        true
      );
      router.push(
        `/verify-email?publicKey=${publicKey}&email=${email}&isRecovery=true`
      );
    } catch (error: any) {
      console.log(error);

      if (typeof error?.message === "string") {
        openToast({
          type: "ERROR",
          title: error.message,
        });
      } else {
        openToast({
          type: "ERROR",
          title: "Something went wrong",
        });
      }
    }
  });

  return (
    <>
      <div className="VStack h-screen Sub-title">
        <Link
          href="/"
          className=" absolute top-5 left-5 p-2 rounded-lg System-background-blue"
        >
          <IoIosArrowBack className="Ocean-blue w-6 h-6 hover:opacity-60" />
        </Link>

        <div className="HStack">
          <div className="VStack w-1/3 h-screen justify-center">
            <form onSubmit={onSubmit}>
              <div className="VStack gap-4 items-center justify-center align-middle">
                <div className="VStack text-center gap-4">
                  <p className="Title text-lg Ocean-blue">Atomic</p>
                  <p className="text-md Title text-3xl Ocean-blue">
                    Welcome Back
                  </p>
                </div>
                <div className="VStack gap-2 w-2/3">
                  <Button
                    type="button"
                    label="Continue with wallet?"
                    variant="primary"
                    onClick={requestSignInWithWallet}
                    className="Button-secondary p-2 mt-5 mb-5"
                  />
                  <div className="flex justify-center items-center mt-4 mb-4">
                    <div className="w-1/4 Herizontal-line System-background-ocean-blue"></div>
                    <p className="w-2/4 text-xs text-center Ocean-blue opacity-70">
                      OR LOGIN WITH EMAIL
                    </p>
                    <div className="w-1/4 Herizontal-line System-background-ocean-blue"></div>
                  </div>

                  <label htmlFor="email"></label>

                  <input
                    {...register("email", {
                      required: "Please enter a valid email address",
                    })}
                    onChange={(e) => {
                      setValue("email", e.target.value);
                      if (!isValidEmail(e.target.value)) return;
                    }}
                    placeholder="Email"
                    type="email"
                    className="System-background-blue rounded-md p-2"
                    required
                  />
                  <Button
                    type="submit"
                    label="Log in"
                    variant="affirmative"
                    onClick={onSubmit}
                    className=" Button-primary rounded-md p-2 mt-5"
                  />
                  <div className="Herizontal-line System-background-ocean-blue"></div>
                  <div className="HStack gap-2 justify-center">
                    <p className="">Don't have an account yet?</p>
                    <a
                      onClick={() => requestAuthentication(true)}
                      className=" underline Ocean-blue pl-4"
                    >
                      Create account
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="w-2/3 System-background-blue h-screen flex items-center justify-center align-middle">
            <img
              src="https://drive.google.com/uc?export=view&id=1D0qKQb8249CnPe40Wh07u2YbPV99t7KG"
              alt="Creator is here!"
              className="w-4/5"
            />
          </div>
        </div>
      </div>
    </>
  );
};
// SignInPage.getLayout = useDefaultLayout;

export default SignInPage;
