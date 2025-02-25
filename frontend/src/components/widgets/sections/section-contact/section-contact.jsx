import Lottie from "lottie-react";
import { useState } from "react";

import BtnPhone from "../../../UI/buttons/btn-tel/btn-phone";
import GreenButton from "../../../UI/green-button/green-button";
import ButtonEmail from "../../../UI/buttons/button-email/button-email";
import WriteUsPopup from "../../modal-window/write-us-popup/write-us-popup";

import planeAnimation from "../../../../assets/video/plane-animation.json";

import "./section-contact.scss";

const SectionContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopUp = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  return (
    <>
      <section className="section-contact">
        <Lottie
          className="video"
          animationData={planeAnimation}
          loop
          muted
        />
        <div className="content">
          <h2 className="content__heading">Залишились питання?</h2>
          <h2 className="content__heading">Потрібна консультація?</h2>
          <span className="content__text">Телефонуйте нам</span>
          <BtnPhone />
          <span className="content__text">Пишіть нам</span>
          <ButtonEmail margin="0px 0px 50px 0px" />
          <GreenButton onClick={openPopUp} text="Заповніть форму" />
          <WriteUsPopup isOpen={isOpen} onClick={closePopup} />
        </div>
      </section>
    </>
  );
};

export default SectionContact;
