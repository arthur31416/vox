// flow

import React from "react";

type Props = {
  onSearch: () => void,
  onLogin: () => void,
  isLogged: boolean
};

const EmptyStateHome = ({ onSearch, onLogin, isLogged }: Props) => (
  <div className="container">
    empty state

    <style jsx>{`
        .container {
            background-color: red;
        }
    `}</style>
  </div>
);

export default EmptyStateHome;
