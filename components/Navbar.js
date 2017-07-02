// flow
import React from "react";
import { Metrics, Colors } from "../themes";
import IconArrowBack from "react-icons/lib/md/arrow-back";

type Props = {
  title: string,
  back?: () => void,
  titleRight?: any
};

const Navbar = ({ title, back, titleRight }: Props) => (
  <div className="container">
    <div className="title-left">
      {!!back &&
        <div onClick={back}>
          <IconArrowBack size={Metrics.navbarIconSize} />
        </div>}
    </div>

    <div className="container-title">
      <span className="title">{title}</span>
    </div>

    <div className="title-right">
      {titleRight}
    </div>

    <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 ${Metrics.doublePadding}px;
          height: ${Metrics.navbarHeight}px;
          background-color: ${Colors.backgroundNavbar};
          color: #fff;
          font-size: 16px;
        }

        .container-title {
          max-width: calc(100% - ${Metrics.navbarIconSize * 2}px - ${Metrics.doublePadding * 2}px);
          display: flex;
        }

        .title {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .title-left, .title-right {
          cursor: pointer;
        }
    `}</style>
  </div>
);

export default Navbar;
