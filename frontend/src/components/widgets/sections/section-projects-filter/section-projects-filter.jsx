import { useState } from "react";
import { useNavigate } from "react-router";

import "./section-projects-filter.scss";

const SectionProjectsFilter = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  let navigate = useNavigate();

  const filters = [
    {
      text: "Всі проекти",
      url: "only-projects",
    },
    {
      text: "Виготовлення вивісок",
      url: "only-vyvisky",
    },
    {
      text: "Брендування авто",
      url: "only-auto",
    },
    {
      text: "Друк фотозон",
      url: "only-photozone",
    },
    {
      text: "Рекламні конструкції і таблички",
      url: "only-konstrukcii",
    },
    {
      text: "Широкоформатний друк",
      url: "only-shyrokoformat",
    },
    {
      text: "Друк картин на холсті",
      url: "only-pictures",
    },
    {
      text: "Оформлення вітрин",
      url: "only-vitryny",
    },
    {
      text: "Поліграфія",
      url: "only-poligrafija",
    },
    {
      text: "Друк на одязі",
      url: "only-closes",
    },
    {
      text: "Сувенірна продукція",
      url: "only-suveniry",
    },
  ];

  const handleChangeState = (elem, index) => {
    setActiveBtn(index);
    navigate("/projects/" + elem.url);

    console.log(index);
    console.log(activeBtn);
  };

  return (
    <>
      <ul className="section-projects-filter__btn-list">
        {filters.map((elem, index) => {
          const classNameItemBtn =
            activeBtn === index
              ? "section-projects-filter__btn-item active"
              : "section-projects-filter__btn-item";
          return (
            <li
              className={classNameItemBtn}
              key={index}
              onClick={() => handleChangeState(elem, index)}
            >
              <button className="section-projects-filter__btn">
                {elem.text}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SectionProjectsFilter;
