import "./App.css";
import { IoIosAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const [todo, setTodo] = useState("");
  const [alltodo, setAllTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setAllTodo(items);
    }
  }, []);

  console.log("this is item", items);
  const handleClick = () => {
    if (todo) {
      setAllTodo([...alltodo, todo]);
      setTodo("");
      localStorage.setItem("items", JSON.stringify(alltodo));
    } else alert("Please type a task");
  };

  return (
    <div className="flex  min-w-[30rem] h-screen justify-center items-center bg-[url(https://i.pinimg.com/736x/e6/73/d5/e673d5128169c3efca2a0a8db75a456c.jpg)] bg-no-repeat  bg-top  overflow-scroll">
      <div className="min-w-[20%] flex flex-col gap-5 max-h-full">
        <h1 className="text-indigo-900 text-bold text-[2rem] mb-5 text-center">
          My Memo List
        </h1>
        <h3 className="text-bold text-[1rem] mt-2 text-center text-teal-700">
          Lets Plan for the day!!
        </h3>
        <div className="flex flex-col text-[1rem] h-[22rem] w-[22rem] overflow-auto gap-5 px-3">
          {alltodo.map((item, idx) => (
            <Card
              key={idx}
              idx={idx}
              setTodo={setTodo}
              alltodo={alltodo}
              item={item}
              setAllTodo={setAllTodo}
            />
          ))}
        </div>
        <div className="flex gap-2 text-[1rem] items-center mx-auto">
          <IoIosAddCircle className="text-[2.5rem]" onClick={handleClick} />
          <input
            placeholder="Add todo to Memo List..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="border-slate-400 border-2 p-1 "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
