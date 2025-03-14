import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import "./section-projects-filter.scss";

const vwOnFirstRender = window.visualViewport.width;

const SectionProjectsFilter = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(vwOnFirstRender);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.visualViewport.width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let navigate = useNavigate();

  const { filter } = useParams();
  console.log("Filter: section projects filter: " + filter);

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
    {
      text: "Ростові фігури",
      url: "only-rostovi-figury",
    },
  ];

  const handleChangeState = (elem, index) => {
    setActiveBtn(index);
    navigate("/projects/" + elem.url);

    console.log("index:" + index);
    console.log("active button:" + activeBtn);
  };

  useEffect(() => {
    const index = filters.findIndex(item => item.url === filter); // шукаєм індекс елемента. filter це динамічка частина URL
    if (index != -1) {
      if (filter === filters[index].url) {
        setActiveBtn(index);
      }
    }
  }, [filter]);

  // коли екран менше 360px, то слово обрізається і додається "..."
  const textButton = elem => {
    const text = elem.text;
    const slicedText = text.slice(0, 20);
    const readyText =
      text.length < 21 ? slicedText : slicedText + "...";
    if (viewportWidth < 360) {
      return (
        <button className="section-projects-filter__btn">
          {readyText}
        </button>
      );
    } else {
      return (
        <button className="section-projects-filter__btn">
          {text}
        </button>
      );
    }
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
              {textButton(elem)}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SectionProjectsFilter;
