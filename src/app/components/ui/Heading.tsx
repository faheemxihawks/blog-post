import React from "react";

type HeadingProps = {
  text: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
};

const variants = {
  Heading1: "text-5xl md:text-6xl font-extrabold leading-tight",
  heading2: "text-2xl md:text-3xl font-extrabold",
  subHeading: "text-xl md:text-xl font-extrabold text-[#232536]",
  subHeading2: "text-[#232536] font-semibold text-lg leading-snug",
};

const Heading: React.FC<HeadingProps> = ({
  text,
  className = "",
  variant = "Heading1",
}) => {
  return (
    <h1 className={`${variants[variant] || ""} ${className}`}>
      {text}
    </h1>
  );
};

export default Heading;
