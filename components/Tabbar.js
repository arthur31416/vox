// flow

import React from "react";
import Link from "next/link";
import { Colors, Metrics } from "../themes";
import IconSearch from "react-icons/lib/md/search";
import IconPerson from "react-icons/lib/md/person";
import IconHome from "react-icons/lib/md/playlist-play";

type Props = {
  pathname: string
};

const Tabbar = ({ pathname }: Props) => (
  <div className="container">
    <Link prefetch href="/">
      <a className={pathname === "/" && "is-active"}>
        <IconHome />
        <span className="name">
          Books
        </span>
      </a>
    </Link>

    <Link prefetch href="/search">
      <a className={pathname === "/search" && "is-active"}>
        <IconSearch />
        <span className="name">
          Search
        </span>
      </a>
    </Link>

    <Link prefetch href="/profile">
      <a className={pathname === "/profile" && "is-active"}>
        <IconPerson />
        <span className="name">
          Profile
        </span>
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
        border-top: 1px solid #000; 
      }
      a {
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        text-decoration: none;
        color: #aaa;
        font-weight: 300;
      }
      .is-active {
        color: #fff;
      }
      .name {
        font-size: 11px;
        margin-top: -2px;
      }
  `}</style>
  </div>
);

export default Tabbar;
