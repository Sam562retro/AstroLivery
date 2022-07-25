import React from "react";
import { API } from "../../backend";

const ImageHelper = ({product}) => {
  const imageUrl = product ? `${API}/product/photo/${product._id}` : `https://www.dinerotechlabs.com/wp-content/themes/seolounge/images/no-image/No-Image-Found-400x264.png`
  return (
    <div className="rounded border border-success p-2 card-img-top text-center">
      <img
        src={imageUrl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;


