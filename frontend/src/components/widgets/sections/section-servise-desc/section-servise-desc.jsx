import IconCar from "../../../UI/svg/icon-car/icon-car";
import CardAnimatedIcon from "../../card/card-animated-icon/card-animated-icon";
import CardServiseDesc from "../../card/card-servise-desc/card-servise-desc";

import "./section-servise-desc.scss";

const SectionServiseDesc = () => {
  return (
    <>
      <section className="servise-desc">
        <CardAnimatedIcon Icon={IconCar} />
        <CardServiseDesc />
      </section>
    </>
  );
};

export default SectionServiseDesc;
