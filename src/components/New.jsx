import PropTypes from "prop-types";

// Компонент для отображения новых элементов
function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}

New.propTypes = {
  children: PropTypes.node.isRequired,
};

export default New;
