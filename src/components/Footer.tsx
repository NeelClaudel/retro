import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiJupiter, GiEagleHead, } from "react-icons/gi";
import { CiPill } from "react-icons/ci";
import { SlGhost } from "react-icons/sl";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="border-t border-secondary">
        <div
          className={` container mx-auto flex h-36 flex-col items-center justify-center border-secondary px-6 py-6 md:h-32 md:flex-row md:justify-between`}
        >
          <div className="SocialButtons flex h-full w-full flex-row justify-center gap-6 pb-3 md:justify-start md:pb-0">
            <Link href="https://pump.fun/board" className="text-[0px]">
              PumpFun
              <CiPill className="h-full w-full text-light transition-all hover:text-secondary active:text-secondary" />
            </Link>
            <Link
              href="https://web.telegram.org/"
              className="text-[0px]"
            >
              Telegram
              <FaTelegramPlane className="h-full w-full text-light transition-all hover:text-secondary active:text-secondary" />
            </Link>

            <Link
              href="https://x.com/"
              className="text-[0px]"
            >
              X
              <FaSquareXTwitter className="h-full w-full text-light transition-all hover:text-secondary active:text-secondary" />
            </Link>
            <Link href="https://jup.ag/" className="text-[0px]">
              Jupiter
              <GiJupiter className="h-full w-full text-light transition-all hover:text-secondary active:text-secondary" />
            </Link>
            <Link href="https://dexscreener.com/" className="text-[0px]">
              DexScreener
              <GiEagleHead className="h-full w-full text-light transition-all hover:text-secondary active:text-secondary" />
            </Link>
            <Link href="https://phantom.app/" className="text-[0px]">
              Phantom Wallet
              <SlGhost className="h-full w-full text-light transition-all hover:text-secondary active:text-secondary" />
            </Link>
          </div>

          <div className="CopyrightText">
            <p className="-z-10 inline-block w-full text-center text-xs">
              &copy; Copyright 2024, Catistio Team. All graphics and other
              multimedia are copyrighted to their respective owners and authors.{" "}
              <Link className="border-b border-solid border-light" href="/dmca">
                Legal / DMCA
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
