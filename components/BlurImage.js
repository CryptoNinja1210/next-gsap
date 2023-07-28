import Image from "next/image";
import React, { useState } from "react";

export default function BlurImage({ src, alt, width, height, className }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      key={alt}
      alt={alt}
      src={src}
      fill={true}
      width={width}
      height={height}
      objectFit="cover"
      className={`
          duration-700 ease-in-out group-hover:opacity-75 ovverflow-hidden
          ${className}
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          })`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
