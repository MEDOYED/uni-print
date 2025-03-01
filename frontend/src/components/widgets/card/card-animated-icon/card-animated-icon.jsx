import Lottie from "lottie-react";

import animationVideo from "../../../../assets/video/animation-servises.json";

import "./card-animated-icon.scss";

const CardAnimatedIcon = ({ Icon }) => {
  console.log(Icon);

  return (
    <>
      <div className="card-animated-icon">
        <Lottie
          className="video"
          animationData={animationVideo}
          loop
          muted
        >
          <Icon className="icon" />
        </Lottie>
      </div>
    </>
  );
};

export default CardAnimatedIcon;
