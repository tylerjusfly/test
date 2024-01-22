"use client";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import Button from "./Button";

const JobItem = () => {
  return (
    <div className="border py-[1rem] px-[2.5rem] rounded-[.5rem] border-color-grey-1 w-[42rem] bg-color-white shadow-md">
      <div className="flex items-center justify-between w-full">
        <p>Job title</p>
        <FaRegBookmark className="w-[2.2rem] h-[2.2rem]" />
      </div>
      <p>company</p>
      <p>location</p>
      <div className="flex items-center">
        <p>$650,000 a month</p>
        <p>full time</p>
      </div>
      <div>
        <p>Easy apply</p>
      </div>
      <ul className="list-disc">
        <li>
          Design and develop a responsive, user-centric website using React.
        </li>
        <li>
          Ensure the technical feasibility of UI/UX designs while maintaining
          high-quality graphic standards and brand consistency.
        </li>
        <li>
          Optimize the application for maximum speed and scalability across
          various devices, including mobile phones and tablets.
        </li>
      </ul>
      <p className="text-[1.2rem] text-color-grey-1">Posted 23 days</p>
      <Button
        text="View Job"
        type="button"
        styles={
          "bg-[#5c7cfa] text-color-white py-[.5rem] px-[1rem] rounded-[.5rem] mt-[2rem]"
        }
      />
    </div>
  );
};

export default JobItem;
