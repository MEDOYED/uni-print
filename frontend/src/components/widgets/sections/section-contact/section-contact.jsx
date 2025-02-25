import Lottie from "lottie-react";

import BtnPhone from "../../../UI/buttons/btn-tel/btn-phone";
import GreenButton from "../../../UI/green-button/green-button";

import planeAnimation from "../../../../assets/video/plane-animation.json";

import "./section-contact.scss";

const SectionContact = () => {
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
          <h2 className="content__heading">
            Залишились питання, чи потрібна консультація?
          </h2>
          <span className="content__text">Телефонуйте нам</span>
          <BtnPhone />
          <span className="content__text">Пишіть нам</span>
          <BtnPhone margin="0px 0px 18px 0px" />
          <GreenButton text="Заповніть форму" />
        </div>
      </section>
    </>
  );
};

export default SectionContact;
