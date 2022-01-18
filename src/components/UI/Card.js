import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};
export default Card;

// Card means some kind of container look with rounded corners drop shadow and elements like these
