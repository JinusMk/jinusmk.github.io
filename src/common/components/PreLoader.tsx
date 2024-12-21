import React, { type FC } from "react";

const PreLoader: FC<{load: boolean}> = ({ load }) => {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

export default PreLoader;
