import React from "react";

const Result = ({ data }) => {
  return (
    <div className="result">
      <p className="result-title">Hebrew Date:</p>
      <p className="result-date">{data.hebrew}</p>
    </div>
  );
};

export default Result;
