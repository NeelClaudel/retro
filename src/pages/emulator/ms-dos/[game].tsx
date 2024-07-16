/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import DosPlayer from "~/components/DosPlayer";
import GamesList from "~/components/GamesList";
import Layout from "~/components/Layout";

type Props = {
  gamesList: {
    [key: string]: string[];
  }[];
  game: string;
};

const convertToTitle = (str: string) => {
  const newStr = str.replace(".jsdos", "").replace(/-/g, " ");
  const splitStr = newStr.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i]!.charAt(0).toUpperCase() + splitStr[i]!.substring(1);
  }
  return splitStr.join(" ");
};

const Dos = ({ gamesList, game }: Props) => {
  useEffect(() => {
    window.emulators.pathPrefix = "/js-dos/";
  }, []);

  const toggleFullscreen = () => {
    const gameContainer = document.querySelector(".gameContainer");
    if (gameContainer) {
      if (!document.fullscreenElement) {
        void gameContainer.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          void document.exitFullscreen();
        }
      }
    }
  };

  return (
    <>
      <Head>
        <title>{convertToTitle(game)}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center justify-evenly md:flex-row-reverse">
          <main className="flex h-screen min-h-screen flex-col items-center justify-center bg-black">
            <div className="container flex w-full flex-col items-center justify-center px-4 py-6 md:h-full lg:w-auto">
              <Link href="/" className="pb-6 text-xl">
              Catistio Emulator
              </Link>
              <div className="gameContainer aspect-4/3 h-auto w-screen border-2 border-light xl:h-[800px] xl:w-[800px]">
                <DosPlayer bundleUrl={`/games/ms-dos/${game}.jsdos`} />
              </div>
              <button
                onClick={toggleFullscreen}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Toggle Fullscreen
              </button>
              <p className="pt-3 text-center">
                For the best experience, enter fullscreen
                <br />
                This emulator is experimental, so some things may be weird or
                not work properly.
                <br />
                Currently, the DOS emulator does not work properly on mobile
              </p>
            </div>
          </main>
          <GamesList gamesList={gamesList} />
        </div>
        <Script src="/js-dos/js-dos.js" strategy="beforeInteractive" />
      </Layout>
    </>
  );
};

export default Dos;

export async function getStaticProps(context: { params: { game: string } }) {
  try {
    const gamesFolder = await fs.promises.readdir("./public/games");
    const gamesList = await Promise.all(
      gamesFolder.map(async (folder) => {
        const gamesArr = await fs.promises.readdir(`./public/games/${folder}`);
        return {
          [folder]: gamesArr,
        };
      })
    );
    const gameName = context.params.game;
    return {
      props: {
        gamesList,
        game: gameName,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        gamesList: [],
        game: "",
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const dos = await fs.promises.readdir("./public/games/ms-dos");
    const paths = dos.map((game) => ({
      params: { game: game.replace(".jsdos", "") },
    }));
    return { paths, fallback: false };
  } catch (err) {
    return {
      paths: [],
      fallback: false,
    };
  }
}
