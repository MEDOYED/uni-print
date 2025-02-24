import BtnPhone from "../../../UI/buttons/btn-tel/btn-phone";
import GreenButton from "../../../UI/green-button/green-button";

import planeAnimation from "../../../../assets/video/plane-animation.webm";

import "./section-contact.scss";

const SectionContact = () => {
  return (
    <>
      <section className="section-contact">
        <video className="video" autoPlay loop muted playsInline>
          <source src={planeAnimation} type="video/webm" />
        </video>
        <div className="content">
          <h2 className="content-heading"></h2>
          <span>Телефонуйте</span>
          <BtnPhone />
          <span>Пишіть нам</span>
          <BtnPhone />
          <GreenButton text="Заповніть форму" />
        </div>
      </section>
    </>
  );
};

export default SectionContact;
