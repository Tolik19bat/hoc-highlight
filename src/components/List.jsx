import PropTypes from "prop-types";
import withHighlight from "./withHighlight";
import Video from "./Video";
import Article from "./Article";

const HighlightedArticle = withHighlight(Article);
const HighlightedVideo = withHighlight(Video);

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
