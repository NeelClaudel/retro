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


type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
      
    </>
  );
};

export default Layout;
