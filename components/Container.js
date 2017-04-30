// flow

import React from "react";
import { Metrics } from "../themes";

type Props = {
  children: any,
  width?: number
};

const Container = ({ children, width = Metrics.mobileWidth }: Props) => (
  <div className="container" style={{ maxWidth: width }}>
    {children}
    <style jsx>{`
        .container {
            max-width: ${Metrics.mobileWidth}px;
            display: flex;
            margin: auto;
        }
      `}</style>
  </div>
);

export default Container;
