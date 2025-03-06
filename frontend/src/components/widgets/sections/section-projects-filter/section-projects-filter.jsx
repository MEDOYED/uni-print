import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect } from "react";

import "./section-projects-filter.scss";

const SectionProjectsFilter = () => {
  const [activeBtn, setActiveBtn] = useState(0);

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
    if (filter === "only-vyvisky") {
      setActiveBtn(1);
    } else if (filter === "only-auto") {
      setActiveBtn(2);
    } else if (filter === "only-photozone") {
      setActiveBtn(3);
    } else if (filter === "only-konstrukcii") {
      setActiveBtn(4);
    } else if (filter === "only-shyrokoformat") {
      setActiveBtn(5);
    } else if (filter === "only-pictures") {
      setActiveBtn(6);
    } else if (filter === "only-vitryny") {
      setActiveBtn(7);
    } else if (filter === "only-poligrafija") {
      setActiveBtn(8);
    } else if (filter === "only-closes") {
      setActiveBtn(9);
    } else if (filter === "only-suveniry") {
      setActiveBtn(10);
    } else if (filter === "only-rostovi-figury") {
      setActiveBtn(11);
    }
  }, [filter]);

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
