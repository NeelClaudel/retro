import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "~/components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RetroWeb</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="flex h-screen min-h-screen flex-col items-center justify-center bg-black">
          <div className="container flex h-full flex-col items-center justify-center gap-6 px-4 py-16">
            <h1 className="text-7xl md:text-9xl">RetroWeb</h1>
            <p className="text-center text-lg md:text-2xl">
              Play retro games right in your browser.
            </p>
            <Link
              className="rounded-md border-2 border-black bg-[#aaa] px-3 py-2 text-4xl text-black transition-all hover:border-[#aaa] hover:bg-black hover:text-[#aaa]"
              href="/emulator"
            >
              Play
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
