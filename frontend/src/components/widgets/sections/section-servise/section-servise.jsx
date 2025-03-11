import { Sticker, Shirt } from "lucide-react";

import CardServise from "../../card/card-servise/card-servise";
import IconDesigner from "../../../UI/svg/icon-designer/icon-designer";
import IconPicture from "../../../UI/svg/icon-picture/icon-picture";
import IconShopWindow from "../../../UI/svg/icon-shop-window/icon-shop-window";
import IconPrintProduction from "../../../UI/svg/icon-print-production/icon-print-production";
import IconCar from "../../../UI/svg/icon-car/icon-car";
import IconPrinter from "../../../UI/svg/icon-printer/icon-printer";
import IconSignboard from "../../../UI/svg/icon-signboard/icon-signboard";
import IconAdStructure from "../../../UI/svg/icon-ad-structure/icon-ad-structure";
import IconPhotoZone from "../../../UI/svg/icon-photo-zone/icon-photo-zone";
import IconGrowthFigure from "../../../UI/svg/icon-growth-figure/icon-growth-figure";

import "./section-servise.scss";

const SectionServise = () => {
  return (
    <>
      <ul className="section-servise">
        <CardServise
          text="Виготовлення вивісок"
          Icon={IconSignboard}
        />
        <CardServise text="Широкоформатний друк" Icon={IconPrinter} />
        <CardServise
          text="Брендування автотранспорту"
          Icon={IconCar}
        />
        <CardServise text="Оформлення вітрин" Icon={IconShopWindow} />
        <CardServise text="Картини на холсті" Icon={IconPicture} />
        <CardServise
          text="Поліграфічна продукція"
          Icon={IconPrintProduction}
        />
        <CardServise text="Друк фотозон" Icon={IconPhotoZone} />
        <CardServise
          text="Рекламні конструкції"
          Icon={IconAdStructure}
        />
        <CardServise text="Виготовлення наліпок" Icon={Sticker} />
        <CardServise text="Друк на одязі" Icon={Shirt} />
        <CardServise text="Ростові фігури" Icon={IconGrowthFigure} />
        <CardServise text="Послуги дизайнера" Icon={IconDesigner} />
      </ul>
    </>
  );
};

export default SectionServise;
