import Heading from "../../widgets/layout/heading/heading";
import SectionContact from "../../widgets/sections/section-contact/section-contact";
import Footer from "../../widgets/layout/footer/footer";

import testImg from "/assets/img/test/kaktus.jpeg";

import "./page-about.scss";

const PageAbout = () => {
  return (
    <>
      <Heading />
      <section className="page-about">
        <h2 className="page-about__title">Про нас:</h2>
        <div className="page-about__content">
          <p className="page-about__content-intro">
            Амбітна та креативна команда допоможе створити свій
            унікальний корпоративний стиль від ідеї до реалізаціїї в
            життя. <br />
            <br /> Ми спеціалізуємося на виготовленні вивісок,
            брендуванні авто, широкоформатному друці, друці фотозон,
            оформленні вітрин, створенні рекламних конструкцій,
            табличок та друці картин на холсті та ми надаємо повний
            спектр поліграфічних послуг.
            <br />
            <br /> Досвід роботи на рекламному ринку 15 років.
          </p>
          <p className="page-about__content-desc">
            Uni Print – експерти у світі візуальної реклами <br />
            <br /> Ми пропонуємо широкий спектр послуг у сфері друку
            та рекламного оформлення. Uni Print – це сучасна компанія,
            що динамічно розвивається та забезпечує якісні рішення для
            бізнесу. <br />
            <br /> Наші клієнти отримують продукцію, яка відповідає
            найвищим стандартам.
            <br />
            <br /> Ми прагнемо постійного розвитку, впроваджуємо нові
            технології та вдосконалюємо процеси, щоб гарантувати нашим
            клієнтам найкращий результат. Більшість наших замовників
            стають постійними клієнтами, адже цінують нашу
            відповідальність, оперативність і професійний підхід.{" "}
            <br />
            <br /> Обираючи Uni Print, ви отримуєте не просто друк –
            ви отримуєте якісний рекламний продукт, що працює на імідж
            і розвиток вашого бізнесу.
          </p>
          <img
            className="page-about__content-img"
            src={testImg}
            alt=""
          />
        </div>
      </section>
      <SectionContact
        title={"Залишились питання?\nПотрібна консультація?"}
      />
      <Footer />
    </>
  );
};

export default PageAbout;
