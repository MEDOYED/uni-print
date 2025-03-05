import Heading from "../../widgets/layout/heading/heading";
import SectionServiseDesc from "../../widgets/sections/section-servise-desc/section-servise-desc";
import SectionContact from "../../widgets/sections/section-contact/section-contact";

import IconAdStructure from "../../UI/svg/icon-ad-structure/icon-ad-structure";
import IconCar from "../../UI/svg/icon-car/icon-car";
import IconDesigner from "../../UI/svg/icon-designer/icon-designer";
import IconGrowthFigure from "../../UI/svg/icon-growth-figure/icon-growth-figure";
import IconPhotoZone from "../../UI/svg/icon-photo-zone/icon-photo-zone";
import IconPicture from "../../UI/svg/icon-picture/icon-picture";
import IconPrintProduction from "../../UI/svg/icon-print-production/icon-print-production";
import IconPrinter from "../../UI/svg/icon-printer/icon-printer";
import IconShopWindow from "../../UI/svg/icon-shop-window/icon-shop-window";
import IconSignboard from "../../UI/svg/icon-signboard/icon-signboard";

import "./page-services.scss";

const PageServices = () => {
  return (
    <>
      <Heading />
      <SectionServiseDesc
        heading="Виготовлення вивісок"
        text="Виготовлення вивісок — це процес створення унікальних рекламних конструкцій, які допомагають ефективно привертати увагу потенційних клієнтів та підкреслювати індивідуальність вашого бренду. Це надійний спосіб зробити перше враження про ваш бізнес яскравим і незабутнім."
        Icon={IconSignboard}
        link="/projects/only-vyvisky"
      />
      <SectionServiseDesc
        reverse
        heading="Широкоформатний друк"
        text="Широкоформатний друк — це найкраще рішення для створення великих та яскравих зображень, банерів або постерів, здатних привабити нових клієнтів і допомогти вашому бренду виділитися з-поміж конкурентів."
        Icon={IconPrinter}
        link="/projects/only-shyrokoformat"
      />
      <SectionServiseDesc
        heading="Брендування автотранспорту"
        text="Брендування автотранспорту — це чудова можливість перетворити ваші авто на ефектний мобільний рекламний майданчик та підвищити впізнаваність бренду серед широкої аудиторії."
        Icon={IconCar}
        link="/projects/only-auto"
      />
      <SectionServiseDesc
        reverse
        heading="Оформлення вітрин"
        text="Оформлення вітрин — це професійне надання індивідуального стилю та естетики вашим вітринам, що привертає увагу клієнтів і сприяє зростанню продажів, підкреслюючи привабливість вашого бренду."
        Icon={IconShopWindow}
        link="/projects/only-vitryny"
      />
      <SectionServiseDesc
        heading="Картини на холсті"
        text="Картини на холсті — це ідеальний спосіб зберегти важливі спогади або надати вашому інтер’єру яскравого акценту. Високоякісні та деталізовані зображення на полотні створюють атмосферу справжнього мистецтва, підкреслюючи індивідуальність і стиль простору."
        Icon={IconPicture}
        link="/projects/only-pictures"
      />
      <SectionServiseDesc
        reverse
        heading="Поліграфічна продукція"
        text="Поліграфічна продукція — це широкий спектр друкованих матеріалів, що ефективно презентують ваш бренд та допомагають встановити довіру серед клієнтів. Якісні візитки, буклети чи каталоги створюють незабутнє враження та підкреслюють професійний імідж вашої компанії."
        Icon={IconPrintProduction}
        link="/projects/only-poligrafija"
      />
      <SectionServiseDesc
        heading="Друк фотозон"
        text="Друк фотозон — це створення оригінальних та привабливих декоративних стендів для святкових подій, презентацій чи промоакцій. Такий елемент привертає увагу, підсилює атмосферу заходу та дарує гостям яскраві фотографії на довгу пам’ять."
        Icon={IconPhotoZone}
        link="/projects/only-photozone"
      />
      <SectionServiseDesc
        reverse
        heading="Рекламні конструкції"
        text="Рекламні конструкції — це масштабні та помітні елементи, які допомагають презентувати ваш бренд, товар чи послугу в найбільш ефективний спосіб. Вони привертають увагу потенційних клієнтів, формують позитивне враження й виділяють ваш бізнес серед конкурентів."
        Icon={IconAdStructure}
        link="/projects/only-konstrukcii"
      />
      <SectionServiseDesc
        heading="Послуги дизайнера"
        text="Послуги дизайнера — це професійне та креативне втілення ваших ідей у візуальних матеріалах, що гармонійно відображають стиль бренду та ефективно привертають увагу клієнтів."
        Icon={IconDesigner}
      />
      <SectionServiseDesc
        reverse
        heading="Ростові фігури"
        text="Ростові фігури — це реалістичні макети в повний зріст, які здатні миттєво привернути увагу потенційних клієнтів та підкреслити унікальність вашого бренду чи пропозиції. Вони слугують ефектним маркетинговим інструментом для будь-яких заходів та торговельних точок."
        Icon={IconGrowthFigure}
        link="/projects"
      />

      <SectionContact
        title={"Залишились питання? \n Потрібна консультація?"}
      />
    </>
  );
};

export default PageServices;
