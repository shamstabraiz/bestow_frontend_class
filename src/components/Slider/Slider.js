import React from "react";
import { Image } from "react-bootstrap";
function BlogGrid({ image, height }) {
  return (
    <div className="slider">
      <Image className="sliderimage" width={"100%"} height={height || 600} src={image} />
    </div>
  );
}

export default BlogGrid;
