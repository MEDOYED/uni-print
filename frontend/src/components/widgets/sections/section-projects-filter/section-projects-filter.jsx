import { useState } from "react";

import "./section-projects-filter.scss";

const SectionProjectsFilter = () => {
  const [activeBtn, setActiveBtn] = useState(null);

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
    setActiveBtn(prevState => !prevState);
    console.log(index);
  };

  const classNameItemBtn = activeBtn
    ? "section-projects-filter__btn-item active"
    : "section-projects-filter__btn-item";

  return (
    <>
      <ul className="section-projects-filter__btn-list">
        {filters.map((elem, index) => {
          return (
            <>
              <li
                className={classNameItemBtn}
                onClick={handleChangeState}
                key={index}
              >
                <button
                  onClick={() => handleChangeState(index)}
                  className="section-projects-filter__btn"
                >
                  {elem}
                </button>
              </li>
              ;
            </>
          );
        })}
      </ul>
    </>
  );
};

export default SectionProjectsFilter;
