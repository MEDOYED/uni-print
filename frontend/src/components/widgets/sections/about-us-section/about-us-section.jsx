import Button from "../../../UI/btn-video/btn-video";

import "./about-us-section.scss";
const AboutUs = () => {
  return (
    <>
      <div
        className="about-us"
        style={{
          backgroundImage:
            "url('https://ap-light.com/wp-content/uploads/2024/04/about_aplight.jpg')",
        }}
      >
        <div className="container">
          <p className="container__title">Про нас</p>
          <p className="container__desc">
            Ми пропонуємо широку гаму послуг з виготовлення рекламної
            продукції. На даний момент «Ейпілайт» — це успішне
            підприємство, яке завоювало власну нішу в рекламному
            бізнес
          </p>
          <Button text="Переглянути відео" />
        </div>

        <div className="items">
          <div className="items__row">
            <div className="items__column">
              <p className="items__number">12</p>
              <p className="items__text">років досвіду</p>
            </div>
            <div className="items__column">
              <p className="items__number">400</p>
              <p className="items__text">проектів</p>
            </div>
          </div>

          <div className="items__row">
            <div className="items__column">
              <p className="items__number">15</p>
              <p className="items__text">команда</p>
            </div>
            <div className="items__column">
              <p className="items__number">1275</p>
              <p className="items__text">макетів</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
