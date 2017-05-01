// flow

import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import Navbar from "./Navbar";
import { Metrics } from "../themes";

type Props = {
  pathname: string
};

export default ({ pathname }: Props) => (
  <div className="column">
    <div className="desktop column">
      <HeaderDesktop pathname={pathname} />
    </div>

    <div className="mobile column">
      <Navbar title="home" />
      <HeaderMobile pathname={pathname} />
    </div>

    <style jsx>{`
      .column {
        display: flex;
        flex: 1;
        flex-direction: column;
      }

      @media screen and (min-device-width: ${Metrics.desktopWidth}px) {
        .mobile {
          display: none;
        }
      }
      
      @media screen and (max-device-width: ${Metrics.desktopWidth - 1}px) {
        .desktop {
          display: none;
        }
      } 
    `}</style>
  </div>
);
