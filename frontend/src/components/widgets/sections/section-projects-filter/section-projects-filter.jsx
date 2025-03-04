import { useState } from "react";

import "./section-projects-filter.scss";

const SectionProjectsFilter = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  const filters = [
    "Всі проекти",
    "Виготовлення вивісок",
    "Брендування авто",
    "Друк фотозон",
    "Рекламні конструкції і таблички",
    "Широкоформатний друк",
    "Друк картин на холсті",
    "Оформлення вітрин",
    "Поліграфія",
  ];

  const handleChangeState = index => {
    setActiveBtn(index);
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
            <>
              <li
                className={classNameItemBtn}
                key={index}
                onClick={() => handleChangeState(index)}
              >
                <button className="section-projects-filter__btn">
                  {elem}
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default SectionProjectsFilter;
