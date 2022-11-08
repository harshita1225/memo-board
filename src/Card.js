import React, { useState } from "react";
import { BiMessageRoundedEdit } from "react-icons/bi";

const Card = ({ item, idx, alltodo, setTodo, setAllTodo }) => {
  const [status, setStatus] = useState(false);
  const [input, setInput] = useState(item);

  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleClick = () => {
    setAllTodo(alltodo.filter((el) => el !== item));
  };
  return (
    <div className="flex justify-between p-2">
      {edit ? (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      ) : (
        <p>{input}</p>
      )}
      <div className="flex gap-2 ">
        {edit ? (
          <button className="border-2 p-1" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button className="border-2 p-1" onClick={handleEdit}>
            Edit
          </button>
        )}
        <button
          className={`border-2 p-1 ${status ? `bg-green-500` : `bg-red-500`}`}
          onClick={() => setStatus(!status)}
        >
          {status ? "Completed" : "Pending"}
        </button>
        <button className="border-2 p-1" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
