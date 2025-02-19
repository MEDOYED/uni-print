import './btn-video.scss'

const BtnVideo = ({ text }) => {
    return (
      <>
        <button className="btn-send" type="submit">
          {text}
        </button>
      </>
    );
  };
  
  export default BtnVideo;