import "./btn-video.scss";

const BtnVideo = ({ text }) => {
  return (
    <>
      <button className="btn-video" type="submit">
        {text}
      </button>
    </>
  );
};

export default BtnVideo;
