import React from "react";
// import { useSelector } from "react-redux";
import Button from "./Button";

export const DeleteItem = () => {
  // const { items } = useSelector((state) => state?.addDelItem);

  return (
    <div className="text-right mt-10">
      <Button text="Delete Item" bgcolor="#EA4C46" color="white" />
    </div>
  );
};
