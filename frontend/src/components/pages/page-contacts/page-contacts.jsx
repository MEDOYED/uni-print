import SectionContact from "../../widgets/sections/section-contact/section-contact";
import SectionMap from "../../widgets/sections/section-map/section-map";
import Footer from "../../widgets/layout/footer/footer";

import "./page-contacts.scss";

const PageContacts = () => {
  return (
    <>
      <SectionContact title="Наші контакти" address />
      <SectionMap />
      <Footer />
    </>
  );
};

export default PageContacts;
