import React from "react";
import PropTypes from "prop-types";
import "./skeleton.css";

const Skeleton = ({
  height = "70vh",
  width = "100%",
  animation = "pulse", // pulse | wave | none
  component: Component = "div",
  style = {},
  className = "",
}) => {
  return (
    <Component
      className={`custom-skeleton ${animation !== "none" ? `skeleton-${animation}` : ""} ${className}`}
      style={{
        height,
        width,
        ...style,
      }}
    />
  );
};

Skeleton.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animation: PropTypes.oneOf(["pulse", "wave", "none"]),
  component: PropTypes.elementType,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Skeleton;
