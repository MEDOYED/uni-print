import IconCar from "../../../UI/svg/icon-car/icon-car";
import CardAnimatedIcon from "../../card/card-animated-icon/card-animated-icon";
import CardServiseDesc from "../../card/card-servise-desc/card-servise-desc";

import "./section-servise-desc.scss";

const SectionServiseDesc = ({ reverse, heading, text, Icon }) => {
  const className = reverse
    ? "servise-desc__reverse"
    : "servise-desc";
  return (
    <>
      <section className={className}>
        <CardAnimatedIcon Icon={Icon} />
        <CardServiseDesc heading={heading} text={text} />
      </section>
    </>
  );
};

export default SectionServiseDesc;
