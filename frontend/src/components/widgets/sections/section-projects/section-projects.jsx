import CardProjects from "../../card/card-projects/card-projects";

import testImg from "../../../../assets/img/kaktus.jpeg";

import blackCar from "../../../../assets/img/projects/black-car.jpg";
import eskulab from "../../../../assets/img/projects/eskulab.jpg";
import babyBoss from "../../../../assets/img/projects/baby-boss.jpg";
import ProffessionalCosmetics from "../../../../assets/img/projects/professional-cosmetics.jpg";
import shoco from "../../../../assets/img/projects/shoco.jpg";
import somersby from "../../../../assets/img/projects/somersby.png";
import stand from "../../../../assets/img/projects/stand.jpg";
import whiteCar from "../../../../assets/img/projects/white-car.jpg";
import paintOnCanvas from "../../../../assets/img/projects/paint-on-canvas.jpg";
import vyvisky from "../../../../assets/img/projects/vyvisky.jpg";

import "./section-projects.scss";

const SectionProjects = () => {
  return (
    <>
      <section className="projects-section">
        <ul className="list">
          <CardProjects
            src={vyvisky}
            description="Виготовлення вивісок"
          />
          <CardProjects
            src={whiteCar}
            description="Брендування авто"
          />
          <CardProjects src={babyBoss} description="Друк фотозон" />
          <CardProjects
            src={testImg}
            description="Рекламні конструкції і таблички"
          />
          <CardProjects
            src={somersby}
            description="Широкоформатниий друк"
          />
          <CardProjects
            src={paintOnCanvas}
            description="Друк картин на холсті"
          />
          <CardProjects
            src={testImg}
            description="Оформлення вітрин"
          />
          <CardProjects src={testImg} description="Поліграфія" />
        </ul>
      </section>
    </>
  );
};

export default SectionProjects;
