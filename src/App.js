import "./App.css";
import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";
import Card from "./Card";

function App() {
  const [todo, setTodo] = useState("");
  const [alltodo, setAllTodo] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    setAllTodo([...alltodo, todo]);
    setTodo("");
  };
  const handleEdit = () => {};
  console.log(alltodo);

  return (
    <div className="flex gap-2 h-screen justify-center items-center">
      <div>
        <h1>My Memo List</h1>
        <h3>My plan for the day!!</h3>
        <div className="bg-red-400 h-[10rem]">
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
        <div className="flex gap-2 text-[1.5rem] items-center">
          <input
            placeholder="Add todo to Memo List..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="border-slate-400 border-2 p-1"
          />
          <IoIosAddCircle className="text-[2.5rem]" onClick={handleClick} />

          <IoIosAddCircle className="text-[2.5rem]" onClick={handleEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
