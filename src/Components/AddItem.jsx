import React from "react";
import Button from "./Button";
import { addItem } from "../Redux/Actions/index.action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AddItem = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state?.addDelItem);

  const [name, setname] = useState("");

  const showItem = (e) => {
    e.preventDefault();
    setname(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addItem(name));
    setname("");
  };

  return (
    <div className="left-[53%] mt-2">
      <form className="flex gap-2" onSubmit={submitHandler}>
        <div className="">
          <Button
            text="Add Item"
            bgcolor="#0DB0D9"
            color="white"
            onclick={() => dispatch(addItem(name))}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Item"
            className="rounded-md mt-1"
            onChange={showItem}
            value={name}
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
