import { ALargeSmall } from "lucide-react";

import CardServise from "../../card/card-servise/card-servise";
import IconDesigner from "../../../UI/svg/icon-designer/icon-designer";

import BrendAuto from "../../../../assets/img/Brenduvannya-auto.png";

import "./section-servise.scss";

const SectionServise = () => {
  return (
    <>
      <ul className="section-servise">
        <CardServise text="Виготовлення вивісок" Icon={ALargeSmall} />
        <CardServise text="Широкоформатний друк" Icon={ALargeSmall} />
        <CardServise text="Брендування автотранспорту" Icon={ALargeSmall} />
        <CardServise text="Оформлення вітрин" Icon={ALargeSmall} />
        <CardServise text="Картини на холсті" Icon={ALargeSmall} />
        <CardServise text="Поліграфічна продукція" Icon={ALargeSmall} />
        <CardServise text="Послуги дизайнера" Icon={IconDesigner} />
      </ul>
    </>
  );
};

export default SectionServise;
