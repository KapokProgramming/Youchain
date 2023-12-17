import type { ReactNode } from "react";
import { NextPageWithLayout } from "@/utils/types";
import { useDefaultLayout } from "@/hooks/useLayout";
import { useSignInRedirect } from "@/hooks/useSignInRedirect";
import { useAuthStore } from "@/stores/auth";
import { GoHomeFill } from "react-icons/go";
import { PiVideoCameraFill } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/router";
import { BiSolidVideos } from "react-icons/bi";
import { BiSolidVideoPlus } from "react-icons/bi";
import { HiMiniWallet } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";
import { isAbsolute } from "path";
interface Props {
  children: ReactNode;
}

export function DefaultLayout({ children }: Props) {
  const signedIn = useAuthStore((store) => store.signedIn);
  const accountId = useAuthStore((store) => store.accountId);
  const accountProfile = useAuthStore((store) => store.account);
  const logOut = useAuthStore((store) => store.logOut);
  const { requestAuthentication } = useSignInRedirect();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSafeAreaActive, setSafeAreaActive] = useState(true);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const router = useRouter();

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const navigateToProfile = () => {
    router.push({
      pathname: '/profile'

    });
  };

  const toggleSafeArea = () => {
    setSafeAreaActive(!isSafeAreaActive);
    setDropdownOpen(false); // Close the dropdown when toggling
  };
  const toggleSearchBar = () => {
    setSearchBarVisible(!isSearchBarVisible);
    setDropdownOpen(false);
  };
  {
    children;
  }

  return (
    <>
      <div className="HStack h-screen w-screen">
        <div className="hidden lg:block w-1/5 max-w-xs h-full" id="safe-area">
          <div id="panel" className="p-6 VStack gap-4">
            <div className="HStack justify-between items-center">
              <Link
                href="/"
                className="hover:no-underline HStack gap-3 p-2"
                style={{ display: isSafeAreaActive ? "block" : "none" }}
              >
                <p className="Ocean-blue text-xl Title">Atomic</p>
              </Link>
              <div
                onClick={toggleSafeArea}
                className="p-4 rounded-md cursor-pointer hover:System-background-blue"
                style={{
                  backgroundColor: isSafeAreaActive ? "" : "#571de3",
                }}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>display_fill</title>
                  <g
                    id="页面-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Device"
                      transform="translate(-720.000000, -240.000000)"
                    >
                      <g
                        id="display_fill"
                        transform="translate(720.000000, 240.000000)"
                      >
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M19,4 C20.6569,4 22,5.34315 22,7 L22,17 C22,18.6569 20.6569,20 19,20 L5,20 C3.34315,20 2,18.6569 2,17 L2,7 C2,5.34315 3.34315,4 5,4 L19,4 Z M10.7071,8.29289 C10.3466385,7.93241 9.77939633,7.90468077 9.3870988,8.20970231 L9.29289,8.29289 L6.29289,11.2929 C5.90237,11.6834 5.90237,12.3166 6.29289,12.7071 C6.65337923,13.0675615 7.22060645,13.0952893 7.61290152,12.7902834 L7.70711,12.7071 L10.7071,9.70711 C11.0976,9.31658 11.0976,8.68342 10.7071,8.29289 Z M6.29289,7.29289 L5.29289,8.29289 C4.90237,8.68342 4.90237,9.31658 5.29289,9.70711 C5.68342,10.0976 6.31658,10.0976 6.70711,9.70711 L7.70711,8.70711 C8.09763,8.31658 8.09763,7.68342 7.70711,7.29289 C7.31658,6.90237 6.68342,6.90237 6.29289,7.29289 Z"
                          id="形状"
                          fill={"#636366FF"}
                          style={{
                            fill: isSafeAreaActive ? "#636366FF" : "#FFF",
                          }}
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            <Link
              href="/"
              className={`HStack gap-3 items-center p-4 hover:System-background-blue  hover:no-underline  rounded-lg ${
                router.pathname === "/" ? "active" : ""
              }`}
            >
              <div className="w-1/5 VStack justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="nonzero">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                    <path
                      className={`Grey-2 ${
                        router.pathname === "/" ? "active" : ""
                      }`}
                      d="M13.2 2.65a2 2 0 0 0-2.4 0l-7 5.25A2 2 0 0 0 3 9.5V19a2 2 0 0 0 2 2h3.9a1.1 1.1 0 0 0 1.1-1.1V15a2 2 0 1 1 4 0v4.9a1.1 1.1 0 0 0 1.1 1.1H19a2 2 0 0 0 2-2V9.5a2 2 0 0 0-.8-1.6l-7-5.25Z"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-4/5">
                <p
                  className={`text-md Sub-title Grey-2${
                    router.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </p>
              </div>
            </Link>
            <Link
              href="/trend"
              className={`HStack gap-3 items-center p-4 hover:System-background-blue   hover:no-underline  rounded-lg ${
                router.pathname === "/trend" ? "active" : ""
              }`}
            >
              <div className="w-1/5 VStack justify-center">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>chart_line_line</title>
                  <g
                    id="页面-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Business"
                      transform="translate(-240.000000, 0.000000)"
                      fill-rule="nonzero"
                    >
                      <g
                        id="chart_line_line"
                        transform="translate(240.000000, 0.000000)"
                      >
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M4,4 C4.51283143,4 4.93550653,4.38604429 4.9932722,4.88337975 L5,5 L5,18 L20,18 C20.5523,18 21,18.4477 21,19 C21,19.51285 20.613973,19.9355092 20.1166239,19.9932725 L20,20 L4,20 C3.48716857,20 3.06449347,19.613973 3.0067278,19.1166239 L3,19 L3,5 C3,4.44772 3.44772,4 4,4 Z M20.1935,6.81813 C21.0933,6.81813 21.5439,7.90606 20.9076,8.54231 L15.3386,14.1114 C14.909,14.541 14.2125,14.541 13.7829,14.1114 L11.0252,11.3537 L7.48969,14.8892 C7.09916,15.2797 6.466,15.2797 6.07547,14.8892 C5.68495,14.4987 5.68495,13.8655 6.07547,13.475 L10.2474,9.30305 C10.677,8.87347 11.3735,8.87348 11.803,9.30305 L14.5608,12.0608 L17.8034,8.81813 L17.3892,8.81813 C16.8369,8.81813 16.3892,8.37041 16.3892,7.81813 C16.3892,7.26584 16.8369,6.81813 17.3892,6.81813 L20.1935,6.81813 Z"
                          id="形状"
                          // fill="#636366FF"
                          className={`Grey-2 ${
                            router.pathname === "/trend" ? "active" : ""
                          }`}
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="w-4/5">
                <p
                  className={`text-md Sub-title Grey-2${
                    router.pathname === "/trend" ? "active" : ""
                  }`}
                >
                  Trending
                </p>
              </div>
            </Link>
            <Link
              href="/subscription"
              className={`HStack gap-3 hover:System-background-blue  items-center p-4  hover:no-underline  rounded-lg ${
                router.pathname === "/subscription" ? "active" : ""
              }`}
            >
              <div className="w-1/5 VStack justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="nonzero">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                    <path
                      className={`Grey-2 ${
                        router.pathname === "/subscription" ? "active" : ""
                      }`}
                      d="M14.671 3a4.5 4.5 0 1 0 6.179 6.505l.15-.176V19a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3h9.671ZM17.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-4/5">
                <p
                  className={`text-md Sub-title Grey-2${
                    router.pathname === "/subscription" ? "active" : ""
                  }`}
                >
                  Subscriptions
                </p>
              </div>
            </Link>
            <Link
              href="/myvideo"
              className={`HStack gap-3 hover:System-background-blue  items-center p-4  hover:no-underline  rounded-lg ${
                router.pathname === "/myvideo" ? "active" : ""
              }`}
            >
              <div className="w-1/5 VStack justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                    <path
                      className={`Grey-2 ${
                        router.pathname === "/myvideo" ? "active" : ""
                      }`}
                      d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm4.625 5.63a1.235 1.235 0 0 1 1.715-.992c.504.216 1.568.702 2.916 1.48a28.331 28.331 0 0 1 2.74 1.786 1.234 1.234 0 0 1 0 1.98 28.3 28.3 0 0 1-2.74 1.784 28.322 28.322 0 0 1-2.916 1.482 1.234 1.234 0 0 1-1.715-.992 28.566 28.566 0 0 1-.176-3.264c0-1.551.112-2.719.176-3.264Z"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-4/5">
                <p
                  className={`text-md Sub-title Grey-2${
                    router.pathname === "/myvideo" ? "active" : ""
                  }`}
                >
                  My videos
                </p>
              </div>
            </Link>
            <Link
              href="/upload"
              className={`HStack gap-3  hover:System-background-blue items-center p-4  hover:no-underline  rounded-lg ${
                router.pathname === "/upload" ? "active" : ""
              }`}
            >
              <div className="w-1/5 VStack justify-center">
                <BiSolidVideoPlus
                  className={`Grey-2 w-7 h-7 ${
                    router.pathname === "/upload" ? "Ocean-blue w-7 h-7" : ""
                  }`}
                />
              </div>
              <div className="w-4/5">
                <p
                  className={`text-md Sub-title Grey-2${
                    router.pathname === "/upload" ? "active" : ""
                  }`}
                >
                  Create new
                </p>
              </div>
            </Link>
            <Link
              href="/subscriber"
              className={`HStack gap-3  hover:System-background-blue items-center p-4  hover:no-underline  rounded-lg ${
                router.pathname === "/subscriber" ? "active" : ""
              }`}
            >
              <div className="w-1/5 VStack justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="nonzero">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                    <path
                      className={`Grey-2 ${
                        router.pathname === "/subscriber" ? "active" : ""
                      }`}
                      d="M13 13a4 4 0 0 1 4 4v1.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 2 18.5V17a4 4 0 0 1 4-4h7Zm6 0a3 3 0 0 1 3 3v1.5a1.5 1.5 0 0 1-1.5 1.5H19v-2a4.992 4.992 0 0 0-2-4h2ZM9.5 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM18 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-4/5">
                <p
                  className={`text-md Sub-title Grey-2${
                    router.pathname === "/subscriber" ? "active" : ""
                  }`}
                >
                  Subscribers
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div
          id="stage"
          className="z-40 right-0 fixed h-screen overflow-hidden ${isSafeAreaActive ? '' : ''}"
          style={{
            width: isSafeAreaActive ? "82%" : "95%",
            overflowY: "auto", // Add this line to enable vertical scrolling
            position: "absolute",
            transition: "width 0.5s ease", // Optional: Add transition effect
          }}
        >
          <div
            id="account"
            className=" m-4 z-40 fixed space-x-4 right-4 HStack cursor-pointer"
          >
            {signedIn ? (
              <>
                <div onClick={toggleDropdown}>
                  <div
                    className="VStack rounded-lg p-3 System-background-ocean-blue text-white hover: System-background-secondary"
                    style={{
                      height: isDropdownOpen ? "375px" : "47px",
                      transition: "all 0.5s ease",
                      overflow: "hidden",
                    }}
                  >
                    <div className="HStack gap-2 items-center justify-center">
                      <img
                        src="{accountProfile}"
                        className="w-6 h-6 rounded-sm"
                      />
                      <p>{accountId}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 pt-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <div className="">
                      <div className=" VStack mt-4">
                        <div className="text-white HStack text-left rounded-2xl pl-2 pr-2 p-2 System-background-blue">
                          <div className="HStack justify-between gap-4 w-full">
                            <div className="HStack items-center gap-2">
                              <HiMiniWallet className=" w-5 h-5 text-white" />
                              Wallet
                            </div>
                            <div className="HStack items-center">
                              <button
                                type="button"
                                onClick={navigateToProfile}
                                className="Button-primary p-2"
                              >
                                Connect
                              </button>
                            </div>
                          </div>
                        </div>
                       
                        <button
                          type="button"
                          onClick={navigateToProfile}
                          // onClick={logOut}
                          className="text-white HStack text-left mt-2 mb-2 rounded-2xl p-4 gap-2 hover:System-background-blue"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                          Profile
                        </button>

                        <button
                          type="button"
                          // onClick={logOut}
                          className="text-white HStack text-left rounded-2xl p-4 gap-2 hover:System-background-blue"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Activities
                        </button>
                        <div className="Herizontal-line"> </div>

                        <button
                          type="button"
                          onClick={logOut}
                          className="text-white HStack text-left rounded-2xl p-4 gap-2 hover:System-background-blue"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Setting
                        </button>

                        <div className="Herizontal-line"> </div>

                        <button
                          type="button"
                          onClick={logOut}
                          className="text-white HStack text-left rounded-2xl p-4 gap-2 hover:System-background-blue"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => requestAuthentication(true)}
                  className="z-50 Button-secondary p-2"
                >
                  Create Account
                </button>
                <button
                  type="button"
                  onClick={() => requestAuthentication()}
                  className="z-50 Button-primary p-2"
                >
                  Log In
                </button>
              </>
            )}
          </div>

          {/* ========================== Conten ========================== */}

          <div className="z-50 VStack bg-white h-full">
            <div className="bg-red-500 w-full "></div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
