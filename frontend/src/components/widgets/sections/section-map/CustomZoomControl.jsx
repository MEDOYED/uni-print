import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

const CustomZoomControl = () => {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();
    let tooltip = null;
    let timeoutId = null;

    const handleWheel = e => {
      e.preventDefault();
      if (e.ctrlKey) {
        if (e.deltaY < 0) {
          map.zoomIn();
        } else if (e.deltaY > 0) {
          map.zoomOut();
        }
      } else {
        if (!tooltip) {
          tooltip = document.createElement("div");
          tooltip.innerText = "Затисніть Ctrl для масштабування";
          tooltip.style.cssText = `
            position: absolute;
            font-size: 25px;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            padding: 5px 10px;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            border-radius: 4px;
            z-index: 1000;
          `;
          container.appendChild(tooltip);
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (tooltip) {
            container.removeChild(tooltip);
            tooltip = null;
          }
        }, 2000);
      }
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [map]);

  return null;
};

export default CustomZoomControl;
