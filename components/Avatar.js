// flow

import React from "react";
import { Metrics, Colors } from "../themes";

type Props = {
  url: string,
  size?: number
};

const Avatar = ({ url, size = Metrics.avatarSmall }: Props) => (
  <span>
    <img height={size} width={size} src={url} className="image" />
    <style jsx>{`
      .image {
          background-color: ${Colors.background};
      }
    `}</style>
  </span>
);

export default Avatar;
