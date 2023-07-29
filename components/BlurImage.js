import React, { useState } from "react";
import Image from "next/image";
export default function BlurImage({ src, alt, width, height, className }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      key={alt}
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={`
          duration-700 ease-in-out group-hover:opacity-75 overflow-hidden
          ${className}
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale rounded-2xl"
              : "scale-100 blur-0 grayscale-0"
          })`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
