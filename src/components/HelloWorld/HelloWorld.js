import React from "react";
import PropTypes from "prop-types";

/** Component for say Hello */
const HelloWorld = ({ message }) => {
  return <div>Hello {message}</div>;
};

HelloWorld.propTypes = {
  /** Message for explain something */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  /** Message for explain something */
  message: "World"
};

export default HelloWorld;
