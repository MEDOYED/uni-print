import "./heading.scss";

const Heading = () => {
  return (
    <>
      <div className="heading">
        <a href="tel:+380983194257" className="heading__phone">
          +38 (098) 319 42 57
        </a>
        <button className="heading__write-us">Написати нам</button>
      </div>
    </>
  );
};

export default Heading;
