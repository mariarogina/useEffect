import React from "react";
import PropTypes from "prop-types";

export default function ListItem(props) {
  const handleClick = () => {
    props.activeItem(props.id);
  };

  return (
    <li
      className={props.active ? "list-group-item active" : "list-group-item"}
      onClick={handleClick}
    >
      {props.children}
    </li>
  );
}

ListItem.propTypes = {
  
  activeItem: PropTypes.bool,
  id:PropTypes.number,
};

ListItem.defaultProps = {
  
  activeItem: false,
  id: '',
};
