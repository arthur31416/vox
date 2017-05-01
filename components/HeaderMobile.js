// flow

import React from "react";
import Link from "next/link";
import { Colors, Metrics } from "../themes";
import IconSearch from "react-icons/lib/md/search";
import IconPerson from "react-icons/lib/md/person";

type Props = {
  pathname: string
};

const HeaderMobile = ({ pathname }: Props) => (
  <div className="container">
    <Link prefetch href="/">
      <a className={pathname === "/" && "is-active"}>
        <IconSearch />
      </a>
    </Link>

    <Link prefetch href="/about">
      <a className={pathname === "/about" && "is-active"}>
        <IconPerson />
      </a>
    </Link>

    <style jsx>{`
      .container {
        position: fixed;
        z-index: 9;
        bottom: 0;
        height: ${Metrics.tabbarHeight}px;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: space-around;
        align-items: center;
        background-color: ${Colors.backgroundTabbar};
      }
      a {
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        margin-right: 25px;
        text-decoration: none;
        color: #aaa;
        font-weight: 300;
      }
      .is-active {
        color: #fff;
      }
  `}</style>
  </div>
);

export default HeaderMobile;
