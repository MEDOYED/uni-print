import { MoveRight } from "lucide-react";

import "./title-to-section.scss";

const TitleToSection = ({ title, link }) => {
  return (
    <>
      <section className="section-title">
        <h2 className="section-title__title">{title}</h2>
        <a href="#" className="section-title__link">
          {link && (
            <>
              {link} <MoveRight />
            </>
          )}
        </a>
      </section>
    </>
  );
};

export default TitleToSection;
