import React, { useState, useEffect } from "react";
import { FcEditImage } from "react-icons/fc";
import { FcDeleteDatabase } from "react-icons/fc";
import { FaHourglassHalf } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
const Card = ({ item, idx, alltodo, setTodo, setAllTodo }) => {
  const [status, setStatus] = useState(false);
  const [input, setInput] = useState(item);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(alltodo));
  }, [alltodo]);

  const handleEdit = (idx) => {
    setEdit(!edit);
    //const findIdx = alltodo.findIndex((el) => el === input);
    /*  console.log(findIdx);
    console.log((alltodo[findIdx] = input)); */
    //setAllTodo([...alltodo, alltodo.splice(findIdx, 1, input)]);

    const oldTodos = [...alltodo];
    oldTodos[idx] = input;
    setAllTodo(oldTodos);
    console.log(oldTodos);
  };

  const handleClick = () => {
    setAllTodo(alltodo.filter((el) => el !== item));
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-5 max-h-[5rem]">
        {edit ? (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        ) : (
          <p>{input}</p>
        )}
        <div className="flex gap-2">
          {edit ? (
            <button
              className="border-2 p-1 rounded-md bg-slate-400"
              onClick={() => handleEdit(idx)}
            >
              Save
            </button>
          ) : (
            <button
              className="border-2 bg-slate-400 rounded-md p-1"
              onClick={handleEdit}
            >
              <FcEditImage />
            </button>
          )}
          <button
            className={`border-2 p-1 rounded-md ${
              status ? `bg-green-500` : `bg-pink-300`
            }`}
            onClick={() => setStatus(!status)}
          >
            {status ? <MdFileDownloadDone /> : <FaHourglassHalf />}
          </button>
          <button
            className="border-2 p-1 bg-slate-400 rounded-md"
            onClick={handleClick}
          >
            <FcDeleteDatabase />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
