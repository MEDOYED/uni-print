import { useState } from "react";

import "./section-projects-filter.scss";

const SectionProjectsFilter = () => {
  const [activeBtn, setActiveBtn] = useState(false);

  const handleChangeState = () => {
    setActiveBtn(prevState => !prevState);
  };

  const classNameItemBtn = activeBtn
    ? "section-projects-filter__btn-item active"
    : "section-projects-filter__btn-item";

  return (
    <>
      <ul className="section-projects-filter__btn-list">
        <li className={classNameItemBtn} onClick={handleChangeState}>
          <button className="section-projects-filter__btn">
            Всі проекти
          </button>
        </li>
        <li className={classNameItemBtn} onClick={handleChangeState}>
          <button className="section-projects-filter__btn">
            Виготовлення вивісок
          </button>
        </li>
        <li className={classNameItemBtn} onClick={handleChangeState}>
          <button className="section-projects-filter__btn">
            Брендування авто
          </button>
        </li>
        <li className={classNameItemBtn} onClick={handleChangeState}>
          <button className="section-projects-filter__btn">
            Друк фотозон
          </button>
        </li>
        <li className={classNameItemBtn} onClick={handleChangeState}>
          <button className="section-projects-filter__btn">
            Рекламні конструкції і таблички
          </button>
        </li>
        <li className={classNameItemBtn} onClick={handleChangeState}>
          <button className="section-projects-filter__btn">
            Широкоформатний друк
          </button>
        </li>
        <li className={classNameItemBtn} onClick={handleChangeState}>
          <button className="section-projects-filter__btn">
            Друк картин на холсті
          </button>
        </li>
        <li className={classNameItemBtn} onClick={handleChangeState}>
          <button className="section-projects-filter__btn">
            Оформлення вітрин
          </button>
        </li>
        <li className={classNameItemBtn} onClick={handleChangeState}>
          <button className="section-projects-filter__btn">
            Поліграфія
          </button>
        </li>
      </ul>
    </>
  );
};

export default SectionProjectsFilter;
