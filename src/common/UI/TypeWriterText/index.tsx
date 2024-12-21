import React from "react";
import Typewriter from "typewriter-effect";
import type { ITypewriterTextProps } from "./types";

const TypewriterText: React.FC<ITypewriterTextProps> = ({
  strings,
  autoStart = true,
  loop = true,
  deleteSpeed = 50,
}) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart,
        loop,
        deleteSpeed,
      }}
    />
  );
};

export default TypewriterText;
