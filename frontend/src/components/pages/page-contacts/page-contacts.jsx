import SectionContact from "../../widgets/sections/section-contact/section-contact";
import SectionMap from "../../widgets/sections/section-map/section-map";

import "./page-contacts.scss";

const PageContacts = () => {
  return (
    <>
      <SectionContact title="Наші контакти" address />
      <SectionMap />
    </>
  );
};

export default PageContacts;
