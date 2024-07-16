import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";

import "public/js-dos/js-dos.css";
import { FloatingNav } from "~/components/UI/FloatingNavbar";
import { navItems } from "~/data";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <FloatingNav navItems={navItems} />
      <Analytics />
    </>
  );
};

export default MyApp;
