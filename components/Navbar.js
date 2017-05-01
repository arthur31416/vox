// flow

import React from "react";
import { Metrics, Colors } from "../themes";

type Props = {
  title: string
};

const Navbar = ({ title }: Props) => (
  <div className="container">
    {title}

    <style jsx>{`
        .container {
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            align-items: center;
            height: ${Metrics.navbarHeight}px;
            background-color: ${Colors.backgroundNavbar};
            color: #fff;
            font-size: 16px;
        }
    `}</style>
  </div>
);

export default Navbar;
