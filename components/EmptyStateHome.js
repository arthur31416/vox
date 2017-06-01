// flow

import React from "react";
import Link from "next/link";
import { Metrics, Colors } from "../themes";
import withData from "../lib/withData";

type Props = {
  isLogged: boolean,
  login: () => void,
  addCount: () => void
};

const EmptyStateHome = ({ isLogged, login, addCount }: Props) => (
  <div className="container">
    <div className="header">
      You have no books!
    </div>

    <p>
      Favourites safeguards all your shortlisted and contacted properties making it easier for you to re-visit them.
    </p>

    <div className="container-button">
      <Link href="/search"><a className="button">Find books</a></Link>
    </div>

    {!isLogged &&
      <div className="login">
        <a href="#" onClick={login}>Already have an account?</a>
        {/*<Link href="/login"><a>already have an account?</a></Link>*/}
      </div>}

    <div>
      <button onClick={addCount}>One more time</button>
    </div>

    <style jsx>{`
        .container {
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            justify-content: flex-start; 
            background-color :#fff;
            padding: 160px ${Metrics.doublePadding}px ${Metrics.doublePadding}px ${Metrics.doublePadding}px; 
            background-image: url('/static/book.png');
            background-repeat: no-repeat;
            background-position: center 30px;
        }

        .header {
          color: #222;
          font-size: 16px;
        }

        p {
          color: #999;
          font-size: 14px;
          text-align: center;
        }

        .container-button {
            padding-top: ${Metrics.smallPadding}px;
        }

        .button {
            padding: ${Metrics.basePadding}px ${Metrics.doublePadding}px;
            background-color: ${Colors.primary};
            text-decoration: none;
            color: white;
            min-width: 180px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            border-radius: ${Metrics.borderRadius}px;
        }

        .login {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            padding-bottom: ${Metrics.doublePadding}px;
        }

        .login a {
            text-decoration: none;
            padding-bottom: 5px;
            border-bottom: 1px solid;
            color: ${Colors.brand};
        }
    `}</style>
  </div>
);

export default EmptyStateHome;
