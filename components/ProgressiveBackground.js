// @flow

import React, { Component } from "react";

type Props = {
  src: string,
  placeholder: string,
  className: string
};

export default class ProgressiveBackground extends Component {
  props: Props;

  state = {
    hasLoaded: false
  };

  _onLoad = () => {
    this.setState(state => ({
      hasLoaded: true
    }));
  };

  render() {
    const { src, placeholder, className } = this.props;
    const { hasLoaded } = this.state;

    return (
      <div
        className={`${className} container-ld`}
        style={{ backgroundImage: `url(${placeholder})` }}
      >
        <div
          className={`${className} container-hd`}
          style={{ backgroundImage: `url(${src})` }}
        >
          <img
            src={src}
            onLoad={this._onLoad}
            width={0}
            height={0}
            style={{ opacity: 0, visibility: "hidden" }}
          />
        </div>

        <style jsx>{`
          .container-ld {
            background-size: cover;
            background-position: top center;
          }

          .container-hd {
            background-size: cover;
            background-position: top center;
            display: flex;
            flex: 1;
          }
        `}</style>
      </div>
    );
  }
}
