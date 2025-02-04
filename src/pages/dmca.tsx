import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "~/components/Layout";

const DMCA = () => {
  return (
    <>
      <Head>
        <title>Catistio | DMCA</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-center bg-black">
          <div className="container flex h-full flex-col items-start justify-center gap-6 px-4 py-16">
            <h1 className="text-7xl md:text-9xl">Legal / DMCA</h1>
            <h2 className="text-5xl md:text-7xl">Disclaimer</h2>
            <p>
              Catistio is a project dedicated towards the preservation and
              archival of retro video games. Catistio does not condone or
              promote piracy, please purchase modern games to support the game
              developers and companies; We are strong supporters of purchasing
              current generation console games.
            </p>
            <p>
              All game versions present on the site are already out of
              production and are no longer available in the primary market.
              Without a service like this, many of the titles available here
              would be lost and forgotten.
            </p>
            <p>
              By playing ANY titles from this website you are agreeing to the
              following:
            </p>
            <ul>
              <li>
                You are responsible for checking your local laws regarding the
                use of this site.
              </li>
              <li>You are authorized to / own a license to play any game.</li>
              <li>
                These files are hosted for archival purposes on a best effort
                basis and we do not guarantee any level of quality as far as
                emulation is concerned.
              </li>
            </ul>
            <h2 className="text-5xl md:text-7xl">
              Removal Notices & DMCA Information
            </h2>
            <p>
              If you own the copyrights to a title hosted on Catistio and would
              like to request removal please note that we process all correct
              and complete removal requests within 5 working days. We are
              DMCA-compliant and happy to work with you.
            </p>
            <p>Catistio [at] gmail [dot] com</p>
            <h2 className="text-5xl md:text-7xl">Copyrights</h2>
            <p>
              All graphics, games, and other multimedia are copyrighted to their
              respective owners and authors.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default DMCA;
