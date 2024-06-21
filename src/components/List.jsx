import PropTypes from "prop-types";
import hocWithHighlight from "./hocWithHighlight"
import Video from "./Video";
import Article from "./Article";

const HighlightedArticle = hocWithHighlight(Article);
const HighlightedVideo = hocWithHighlight(Video);

// Компонент для отображения списка статей и видео
function List(props) {
  return props.list.map((item, index) => {
    switch (item.type) {
      case "video":
        return <HighlightedVideo key={index} {...item} />;
      case "article":
        return <HighlightedArticle key={index} {...item} />;
      default:
        return null;
    }
  });
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string,
      views: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default List;
