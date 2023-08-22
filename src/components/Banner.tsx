import React from "react";

interface bannerProps {
  text: string;
}

const Banner: React.FC<bannerProps> = (props) => {
  return (
    <div className="absolute bottom-0 w-full bg-linea-blue h-16 flex justify-center items-center">{props.text}</div>
  );
};

export default Banner;
