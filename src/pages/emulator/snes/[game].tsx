/* eslint-disable @typescript-eslint/restrict-template-expressions */
import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import GamesList from "~/components/GamesList";
import Layout from "~/components/Layout";

type Props = {
  gamesList: {
    [key: string]: string[];
  }[];
  game: string;
};
const convertToTitle = (str: string) => {
  const newStr = str.replace(".7z", "").replace(/-/g, " ");
  const splitStr = newStr.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      splitStr[i]!.charAt(0).toUpperCase() + splitStr[i]!.substring(1);
  }
  return splitStr.join(" ");
};

const SNES = ({ gamesList, game }: Props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.EJS_player = "#game";
      window.EJS_core = "snes";
      window.EJS_gameName = convertToTitle(game);
      window.EJS_color = "#aaaaaa";
      window.EJS_startOnLoaded = true;
      window.EJS_pathtodata = "/emulatorjs/data/";
      window.EJS_gameUrl = `/games/snes/${game}.7z`;
      window.EJS_DEBUG_XX = true;
      window.EJS_defaultOptions = {
        "save-state-location": "keep in browser",
      };
      window.EJS_Buttons = {
        playPause: false,
        restart: true,
        mute: false,
        settings: true,
        fullscreen: true,
        saveState: true,
        loadState: true,
        screenRecord: false,
        gamepad: true,
        cheat: false,
        volume: false,
        quickSave: false,
        quickLoad: false,
        screenshot: false,
        cacheManager: false,
      };
      window.EJS_Settings = {
        volume: 0.75,
        defaultControllers: {
          "0": {
            "0": { value: "88", value2: "1" },
            "1": { value: "83", value2: "3" },
            "2": { value: "16", value2: "8" },
            "3": { value: "13", value2: "9" },
            "4": { value: "38", value2: "12" },
            "5": { value: "40", value2: "13" },
            "6": { value: "37", value2: "14" },
            "7": { value: "39", value2: "15" },
            "8": { value: "90", value2: "0" },
            "9": { value: "65", value2: "2" },
            "10": { value: "81", value2: "4" },
            "11": { value: "69", value2: "5" },
            "12": { value: "82", value2: "6" },
            "13": { value: "87", value2: "7" },
            "14": {},
            "15": {},
            "16": { value: "72" },
            "17": { value: "70" },
            "18": { value: "71" },
            "19": { value: "84" },
            "20": { value: "76" },
            "21": { value: "74" },
            "22": { value: "75" },
            "23": { value: "73" },
            "24": {},
            "25": {},
            "26": {},
          },
          "1": {},
          "2": {},
          "3": {},
        },
      };
    }
  });

  return (
    <>
      <Head>
        <title>{convertToTitle(game)}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center justify-evenly md:flex-row-reverse xl:items-center">
          <main className="flex h-screen min-h-screen flex-col items-center justify-center bg-black">
            <div className="container flex w-full flex-col items-center justify-center px-4 py-6 md:h-full lg:w-auto">
              <Link href="/" className="pb-6 text-xl">
                RetroWeb
              </Link>
              <div className="gameContainer aspect-4/3 w-auto border-2 border-light 2xl:h-full">
                <div id="game"></div>
              </div>
              <p className="pt-3 text-center">
                For the best experience, enter fullscreen
                <br />
                This emulator is experimental, so some things may be weird or
                not work properly
              </p>
            </div>
          </main>
          <GamesList gamesList={gamesList} />
        </div>
      </Layout>
      <Script src="/emulatorjs/data/loader.js" />
    </>
  );
};

export default SNES;

export async function getStaticProps(context: { params: { game: string } }) {
  try {
    const gamesFolder = await fs.promises.readdir("./public/games");
    const gamesList = gamesFolder.map((folder) => {
      const gamesArr = fs.readdirSync(`./public/games/${folder}`);
      return {
        [folder]: gamesArr,
      };
    });
    const gameName = context.params.game;
    return {
      props: {
        gamesList,
        game: gameName,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticPaths() {
  try {
    const snes = await fs.promises.readdir("./public/games/snes");
    const paths = snes.map((game) => ({
      params: { game: game.replace(".7z", "") },
    }));
    return { paths, fallback: false };
  } catch (err) {
    return {
      paths: [],
      fallback: false,
    };
  }
}
