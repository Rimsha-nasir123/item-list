import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddItem from "./AddItem";
import { AiOutlineDelete } from "react-icons/ai";
import { delItem } from "../Redux/Actions/index.action";

export const MenuList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state?.addDelItem);

  const onDelItem = (id) => {
    dispatch(delItem(id));
  };

  console.log(items, "item");

  return (
    <div className="p-10 mt-10 mx-[30%] bg-gradient-to-r from-violet-400 to-green-300">
      <div className="font-bold text-2xl">Menu List</div>

      <AddItem />

      <div>
        <ul className="text-center mt-5">
          {items?.map((list, id) => (
            <li key={id} className="text-left capitalize flex justify-between">
              {list?.name}
              <div className="" onClick={() => onDelItem(list.id)}>
                <AiOutlineDelete fill="red" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
