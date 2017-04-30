// flow

import React from "react";
import { Metrics, Colors } from "../themes";

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
      ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
          color: ${Colors.placeholder};
      }
      :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: ${Colors.placeholder};
        opacity:  1;
      }
      ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: ${Colors.placeholder};
        opacity:  1;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${Colors.placeholder};
      }
      `}</style>
  </div>
);

export default Container;
