import Popular from "./Popular";
import New from "./New";

// HOC для оборачивания компонента в New или Popular в зависимости
// от количества просмотров
function withHighlight(Component) {
  return function aaa(props) {
    if (props.views > 1000) {
      
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    } else if (props.views < 100) {
      
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }
    return <Component {...props} />;
  };
}

export default withHighlight;
