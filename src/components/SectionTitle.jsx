import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b-2 border-base-300 pb-5">
      <p className="capitalize text-3xl font-medium tracking-wider">{text || "title"}</p>
    </div>
  );
};

export default SectionTitle;
