import CardAnimatedIcon from "../../card/card-animated-icon/card-animated-icon";
import CardServiseDesc from "../../card/card-servise-desc/card-servise-desc";

import "./section-servise-desc.scss";

const SectionServiseDesc = ({
  reverse,
  heading,
  text,
  Icon,
  link,
}) => {
  const className = reverse
    ? "servise-desc__reverse"
    : "servise-desc";
  return (
    <>
      <section className={className}>
        <CardAnimatedIcon Icon={Icon} />
        <CardServiseDesc heading={heading} text={text} link={link} />
      </section>
    </>
  );
};

export default SectionServiseDesc;
