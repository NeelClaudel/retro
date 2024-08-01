/* eslint-disable */
import { type NextPage } from "next";
import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import GamesList from "~/components/GamesList";
import Layout from "~/components/Layout";

type Props = {
  gamesList: {
    [key: string]: string[];
  }[];
};


const Emulator = ({ gamesList }: Props) => {
  return (
    <>

      <Layout>
        <div className="flex flex-col items-center justify-evenly md:flex-row-reverse xl:items-center">
          <main className="flex h-screen min-h-screen flex-col items-center justify-center bg-black">
            <div className="container flex w-full flex-col items-center justify-center px-4 py-6 md:h-full lg:w-auto">
              <Link href="/" className="pb-6 text-xl">
              $Cat As Ticker || Emulator
              </Link>
              <p className="text-center">
                CA : So11111111111111111111111111111111111111112
              </p>
              <Link href="#" className="pt-2 pb-6 text-xl">
              Back To Main Website
              </Link>
              <div className="gameContainer aspect-4/3 w-auto border-2 border-light sm:w-3/4 sm:h-3/4 md:w-2/3 md:h-2/3 lg:w-1/1 lg:h-1/2 2xl:h-full">
                <h2 className="hidden md:block">
                  Select a game from the menu on the left.
                  <p>{"<-------------"}</p>
                </h2>
                <h2 className="block md:hidden">
                  Select a game from the menu below.
                  <p>|</p>
                  <p>|</p>
                  <p>|</p>
                  <p>|</p>
                  <p>|</p>
                  <p>|</p>
                  <p>|</p>
                  <p>v</p>
                </h2>
              </div>
              <p className="pt-3 text-center">
                For the best experience, enter fullscreen
              </p>
            </div>
          </main>
          <GamesList gamesList={gamesList} />
        </div>
      </Layout>
    </>
  );
};

export default Emulator;

export async function getStaticProps() {
  try {
    const gamesFolder = await fs.promises.readdir("./public/games");
    const gamesList = gamesFolder.map((folder) => {
      const gamesArr = fs.readdirSync(`./public/games/${folder}`);
      return {
        [folder]: gamesArr,
      };
    });
    return {
      props: {
        gamesList,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}
