import React from "react";
import Footer from "./Footer";

//IMAGES IMPORT

import CatioHalfLife009 from "../../public/catio_halflife_512x512_009.png";
import CatioHalfLife014 from "../../public/catio_halflife_512x512_014.png";
import CatioDude015 from "../../public/catio_dude_512x512_003.png";
import CatioDukeNukkem001 from "../../public/catio_dukeNukkem_512x512_001.png";
import CatioWarriors002 from "../../public/catio_warriors_512x512_002.png";
import CatioPs1Cover004 from "../../public/catio_ps1Cover_512x512_004.png";
import ProgressSlider from "./UI/progress-slider";

const items1 = [
  {
    img: CatioHalfLife009,
    desc: "Half Life 009",
    buttonIcon: CatioHalfLife009,
  },
  {
    img: CatioHalfLife014,
    desc: "Half Life 014",
    buttonIcon: CatioHalfLife014,
  },
  {
    img: CatioDude015,
    desc: "Dude 015",
    buttonIcon: CatioDude015,
  },
  {
    img: CatioDukeNukkem001,
    desc: "Duke Nukkem 001",
    buttonIcon: CatioDukeNukkem001,
  },
  {
    img: CatioWarriors002,
    desc: "Warriors 002",
    buttonIcon: CatioWarriors002,
  },
  {
    img: CatioPs1Cover004,
    desc: "Ps1 Cover 004",
    buttonIcon: CatioPs1Cover004,
  },
];

const items2 = [
  {
    img: CatioHalfLife009,
    desc: "Half Life 009",
    buttonIcon: CatioHalfLife009,
  },
  {
    img: CatioHalfLife014,
    desc: "Half Life 014",
    buttonIcon: CatioHalfLife014,
  },
  {
    img: CatioDude015,
    desc: "Dude 015",
    buttonIcon: CatioDude015,
  },
  {
    img: CatioDukeNukkem001,
    desc: "Duke Nukkem 001",
    buttonIcon: CatioDukeNukkem001,
  },
  {
    img: CatioWarriors002,
    desc: "Warriors 002",
    buttonIcon: CatioWarriors002,
  },
  {
    img: CatioPs1Cover004,
    desc: "Ps1 Cover 004",
    buttonIcon: CatioPs1Cover004,
  },
];

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">

            <ProgressSlider items={items1} />

          </div>

      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">

            <ProgressSlider items={items1} />

          </div>

      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Layout;
