import { isPassKeyAvailable } from "@near-js/biometric-ed25519";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/lib/Button";
import { openToast } from "@/components/lib/Toast";
import { useDefaultLayout } from "@/hooks/useLayout";
import { useAuthStore } from "@/stores/auth";
import { useCurrentComponentStore } from "@/stores/current-component";
import { network } from "@/utils/config";
import type { NextPageWithLayout } from "@/utils/types";

import { handleCreateAccount } from "../utils/auth";
import {
  accountAddressPatternNoSubaccount,
  emailPattern,
  getEmailId,
  isValidEmail,
} from "../utils/form-validation";

const ErrorText = styled.p`
  color: hsla(8, 100%, 33%, 1);
`;

const SignUpPage: NextPageWithLayout = () => {
  const router = useRouter();
  const setComponentSrc = useCurrentComponentStore((store) => store.setSrc);
  const [isAccountAvailable, setIsAccountAvailable] = useState<boolean | null>(
    null
  );
  const [isAccountValid, setIsAccountValid] = useState<boolean | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, touchedFields },
    clearErrors,
  } = useForm();
  const formValues = watch();
  const signedIn = useAuthStore((store) => store.signedIn);

  useEffect(() => {
    const checkPassKey = async (): Promise<void> => {
      const isPasskeyReady = await isPassKeyAvailable();
      if (!isPasskeyReady) {
        openToast({
          title: "",
          type: "INFO",
          description:
            "Passkey support is required for account creation. Try using an updated version of Chrome or Safari to create an account.",
          duration: 5000,
        });
      }
    };
    checkPassKey();
  }, []);

  // redirect to home upon signing in
  useEffect(() => {
    if (signedIn) {
      router.push("/");
    }
  }, [router, signedIn]);

  useEffect(() => {
    setComponentSrc(null);
  }, [setComponentSrc]);

  const checkIsAccountAvailable = useCallback(
    async (desiredUsername: string) => {
      // set to null to show loading
      setIsAccountAvailable(null);
      try {
        if (!desiredUsername) return;

        const response = await fetch(network.nodeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: "dontcare",
            method: "query",
            params: {
              request_type: "view_account",
              finality: "final",
              account_id: `${desiredUsername}.${network.fastAuth.accountIdSuffix}`,
            },
          }),
        });
        const data = await response.json();
        if (data?.error?.cause?.name == "UNKNOWN_ACCOUNT") {
          return setIsAccountAvailable(true);
        }

        if (data?.result?.code_hash) {
          return setIsAccountAvailable(false);
        }
      } catch (error) {
        console.log(error);
        setIsAccountAvailable(false);
      }
    },
    []
  );

  const onSubmit = handleSubmit(async (data) => {
    if (!data?.username || !data.email) return;
    try {
      const fullAccountId = `${data.username}.${network.fastAuth.accountIdSuffix}`;
      const { publicKey, accountId, email } = await handleCreateAccount(
        fullAccountId,
        data.email,
        false
      );
      router.push(
        `/verify-email?publicKey=${encodeURIComponent(
          publicKey
        )}&accountId=${encodeURIComponent(
          accountId
        )}&email=${encodeURIComponent(email)}`
      );
    } catch (error: any) {
      openToast({
        type: "ERROR",
        title: error.message,
      });
    }
  });

  useEffect(() => {
    clearErrors("username");
    if (!formValues?.username?.length) {
      setIsAccountValid(null);
      setIsAccountAvailable(null);
      return;
    }

    const isValid = accountAddressPatternNoSubaccount.test(
      formValues?.username
    );
    setIsAccountValid(isValid);
    if (!isValid) return;

    checkIsAccountAvailable(formValues?.username);
  }, [checkIsAccountAvailable, clearErrors, formValues?.username]);

  // status message, doesn't need to be overoptimized with memoization
  let accountStatusMessage = "";
  let accountStatusState; // "error" or "success"
  if (!formValues?.username?.length) {
    accountStatusMessage = "Use a suggested ID or customize your own.";
  } else if (!isAccountValid) {
    accountStatusMessage =
      "Accounts must be lowercase and may contain - or _, but they may not begin or end with a special character or have two consecutive special characters.";
    accountStatusState = "error";
  } else {
    // valid account is entered, handle availability
    if (isAccountAvailable === null) {
      accountStatusMessage = "Checking availability...";
    } else if (isAccountAvailable) {
      accountStatusMessage = `${formValues?.username}.${network.fastAuth.accountIdSuffix} is available!`;
      accountStatusState = "success";
    } else {
      accountStatusMessage = `${formValues?.username}.${network.fastAuth.accountIdSuffix} is taken, try something else.`;
      accountStatusState = "error";
    }
  }

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
                    Create Account
                  </p>
                </div>
                <div className="VStack gap-4 w-2/3">
                  <label htmlFor="email" className="font-semibold">Email</label>

                  <input
                    {...register("email", {
                      required: "Please enter a valid email address",
                      pattern: {
                        value: emailPattern,
                        message: "Please enter a valid email address",
                      },
                    })}
                    onChange={(e) => {
                      clearErrors("email");
                      setValue("email", e.target.value);
                      if (!isValidEmail(e.target.value)) return;
                      if (!formValues?.username || !touchedFields?.username) {
                        setValue("username", getEmailId(e.target.value));
                      }
                    }}
                    placeholder="user_name@email.com"
                    type="email"
                    required
                    className="System-background-blue rounded-md p-2"
                  />
                  {/* shouldn't need to do a type check here but message is not resolving as a string for some reason */}
                  {typeof errors.email?.message === "string" && (
                    <ErrorText role="alert">{errors.email?.message}</ErrorText>
                  )}

                  <label htmlFor="username" className="font-semibold">Account ID</label>
                  <input
                    autoComplete="webauthn username"
                    {...register("username", {
                      required: "Please enter a valid account ID",
                      pattern: {
                        value: accountAddressPatternNoSubaccount,
                        message: "Please enter a valid account ID",
                      },
                      validate: () => {
                        if (!isAccountAvailable) {
                          return "Please enter a valid account ID";
                        }
                      },
                    })}
                    placeholder="user_name.near"
                    className="System-background-blue rounded-md p-2"
                  />

                  <p className={`subText`}>
                    <span className={accountStatusState || ""}>
                      {accountStatusMessage}
                    </span>
                  </p>
                  {/* shouldn't need to do a type check here but message is not resolving as a string for some reason */}
                  {typeof errors.username?.message === "string" && (
                    <ErrorText role="alert">
                      {errors.username?.message}
                    </ErrorText>
                  )}

                  <Button
                    label="Continue"
                    variant="affirmative"
                    onClick={onSubmit}
                    className="Button-primary p-2"
                  />

                  <div className="Herizontal-line System-background-ocean-blue"></div>
                  <div className="HStack gap-2 justify-center">
                    <p className="">Already have an account?</p>

                    <Link
                      href="/signin"
                      style={{
                        color: "hsla(246, 57%, 61%, 1)",
                        fontWeight: 500,
                      }}
                      className=" underline Ocean-blue pl-4"
                    >
                      Log in
                    </Link>
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

SignUpPage.getLayout = useDefaultLayout;

export default SignUpPage;
