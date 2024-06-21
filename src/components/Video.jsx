import PropTypes from "prop-types";

// Компонент для отображения видео
function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        className="video-frame"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Video;
