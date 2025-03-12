import { useState, useEffect } from "react";

import BtnPhone from "../../../UI/buttons/btn-phone/btn-phone";
import GreenButton from "../../../UI/green-button/green-button";
import WriteUsPopup from "../../modal-window/write-us-popup/write-us-popup";
import IconViber from "../../../UI/svg/icon-viber/icon-viber";

import "./heading.scss";

const vwOnFirstRender = window.visualViewport.width;

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(vwOnFirstRender);

  const openWindow = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.visualViewport.width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="heading">
        {viewportWidth < 651 && (
          <a
            href="https://www.instagram.com/uniprint_lviv?igsh=amRlMGp5NjB5b3Vl"
            target="_blank"
          >
            <IconViber />
          </a>
        )}
        <BtnPhone />
        <GreenButton onClick={openWindow} text={"Написати нам"} />
        <WriteUsPopup isOpen={isOpen} onClick={closePopup} />
      </div>
    </>
  );
};

export default Heading;
