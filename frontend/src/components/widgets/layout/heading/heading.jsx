import { useState } from "react";

import BtnPhone from "../../../UI/buttons/btn-phone/btn-phone";
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
        <BtnPhone />
        <GreenButton onClick={openWindow} text={"Написати нам"} />
        <WriteUsPopup isOpen={isOpen} onClick={closePopup} />
      </div>
    </>
  );
};

export default Heading;
