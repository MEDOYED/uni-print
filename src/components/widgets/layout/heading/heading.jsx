import { useState } from "react";

import GreenButton from "../../../UI/green-button/green-button";
import WriteUsPopup from "../../modal-window/write-us-popup/write-us-popup";

import "./heading.scss";

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWindow = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div className="heading">
        <a href="tel:+380983194257" className="heading__phone">
          +38 (098) 319 42 57
        </a>
        <GreenButton onClick={openWindow} text={"Написати нам"} />
        <WriteUsPopup isOpen={isOpen} onClick={closePopup} />
      </div>
    </>
  );
};

export default Heading;
