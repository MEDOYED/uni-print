import { MoveRight } from "lucide-react";
import { Link } from "react-router";

import "./title-to-section.scss";

const TitleToSection = ({ title, linkText, link }) => {
  return (
    <>
      <section className="section-title">
        <h2 className="section-title__title">{title}</h2>
        <div className="section-title__link">
          {link && (
            <>
              <Link to={link}>
                {linkText} <MoveRight />
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default TitleToSection;
