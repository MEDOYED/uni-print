import CardProjects from "../../card/card-projects/card-projects";

import blackCar from "../../../../assets/img/projects/black-car.jpg";
import eskulab from "../../../../assets/img/projects/eskulab.jpg";
import babyBoss from "../../../../assets/img/projects/baby-boss.jpg";
import ProffessionalCosmetics from "../../../../assets/img/projects/professional-cosmetics.jpg";
import shoco from "../../../../assets/img/projects/shoco.jpg";
import somersby from "../../../../assets/img/projects/somersby.png";
import stand from "../../../../assets/img/projects/stand.jpg";
import whiteCar from "../../../../assets/img/projects/white-car.jpg";

import "./section-projects.scss";

const SectionProjects = () => {
  return (
    <>
      <section className="projects-section">
        <ul className="list">
          <CardProjects src={blackCar} />
          <CardProjects src={eskulab} />
          <CardProjects src={babyBoss} />
          <CardProjects src={ProffessionalCosmetics} />
          <CardProjects src={shoco} />
          <CardProjects src={somersby} />
          <CardProjects src={stand} />
          <CardProjects src={whiteCar} />
        </ul>
      </section>
    </>
  );
};

export default SectionProjects;
