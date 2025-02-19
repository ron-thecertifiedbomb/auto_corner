import React from "react";

interface ImageHolderProps {
  src?: string;
}

const ImageHolder: React.FC<ImageHolderProps> = ({ src }) => {
  return <img className="w-full h-60 object-cover rounded-t-lg" src={src} alt="Car" />;
};

export default ImageHolder;
