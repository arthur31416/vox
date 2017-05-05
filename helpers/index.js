// @flow

import { compose } from "ramda";

const THUMBNAIL_STRING = "_thumb";

const getThumbnail = (extension: string = "jpg") => {
  const removeExtension = url => url.slice(0, -extension.length - 1);
  const addThumbAndExtension = url => url + THUMBNAIL_STRING + "." + extension;

  return compose(addThumbAndExtension, removeExtension);
};

export { getThumbnail };
