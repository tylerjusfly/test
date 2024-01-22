"use client";
import React from "react";
import JobItem from "./JobItem";

const JobsList = () => {
  return (
    <div className="flex flex-wrap justify-between p-[4rem] gap-[3rem]">
      {Array.from({ length: 10 }, (x) => x).map((item, i) => (
        <JobItem key={i} />
      ))}
    </div>
  );
};

export default JobsList;
