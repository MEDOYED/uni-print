import SectionContact from "../../widgets/sections/section-contact/section-contact";
import SectionMap from "../../widgets/sections/section-map/section-map";
import Footer from "../../widgets/layout/footer/footer";

import "./page-contacts.scss";

const PageContacts = () => {
  return (
    <>
      <div className="page-contacts">
        <SectionContact title="Наші контакти" address />
        <div className="page-contacts__map">
          <SectionMap />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageContacts;
