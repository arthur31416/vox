// @flow

import { compose } from "ramda";

const THUMBNAIL_STRING = "_thumb";

const getThumbnail = (extension: string = "jpg") => {
  const removeExtension = url => url.slice(0, -extension.length - 1);
  const addThumbAndExtension = url => url + THUMBNAIL_STRING + "." + extension;

  return compose(addThumbAndExtension, removeExtension);
};

function secondsToHms(d: number): string {
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  return (
    (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") +
    m +
    ":" +
    (s < 10 ? "0" : "") +
    s
  );
}

export { getThumbnail, secondsToHms };
