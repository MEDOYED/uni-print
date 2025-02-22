import { MoveRight } from "lucide-react";

import "./section-title.scss";

const SectionTitle = ({ title, link }) => {
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

export default SectionTitle;
