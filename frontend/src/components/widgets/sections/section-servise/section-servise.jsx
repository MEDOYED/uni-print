import { ALargeSmall } from "lucide-react";

import CardServise from "../../card/card-servise/card-servise";

import "./section-servise.scss";

const SectionServise = () => {
  return (
    <>
      <ul className="section-servise">
        <CardServise text="Об'ємні літери" Icon={ALargeSmall} />
        <CardServise text="Об'ємні літери" Icon={ALargeSmall} />
        <CardServise text="Об'ємні літери" Icon={ALargeSmall} />
        <CardServise text="Об'ємні літери" Icon={ALargeSmall} />
        <CardServise text="Об'ємні літери" Icon={ALargeSmall} />
        <CardServise text="Об'ємні літери" Icon={ALargeSmall} />
        <CardServise text="Об'ємні літери" Icon={ALargeSmall} />
        <CardServise text="Об'ємні літери" Icon={ALargeSmall} />
        <CardServise text="Об'ємні літери" Icon={ALargeSmall} />
      </ul>
    </>
  );
};

export default SectionServise;
