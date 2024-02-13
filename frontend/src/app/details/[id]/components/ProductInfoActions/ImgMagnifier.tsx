"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImgMagnifier = ({
  src,
  width,
  height,
  magnifierHeight = 150,
  magnifierWidth = 150,
  zoomLevel = 1.5,
}: {
  src: string;
  width: number;
  height: number;
  magnifierHeight?: number;
  magnifierWidth?: number;
  zoomLevel?: number;
}) => {
  // state to track cursor position (x,y)
  const [[x, y], setXY] = useState([0, 0]);
  // state to track image size (width, height)
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  // state to control visiblility of the magnifier
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        maxHeight: height,
        width: width,
        overflow:'hidden',
        borderRadius:'10px'
      }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="img"
        onMouseEnter={(e) => {
          // Update the image size and turn on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // Update the cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // Calculate cursor position on the image
          const x = e.pageX - left - window.scrollX;
          const y = e.pageY - top - window.scrollY;
          setXY([x, y]);
        }}
        onMouseLeave={(e) => {
          // Close magnifier
          setShowMagnifier(false);
        }}
      />
      {/* Magnifier */}
      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          opacity: "1",
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          borderRadius: "100%",
        }}
      ></div>
    </div>
  );
};

export default ImgMagnifier;
