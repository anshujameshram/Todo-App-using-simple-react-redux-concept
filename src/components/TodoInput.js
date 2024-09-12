import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/actions/todo";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if(input.trim()){
        dispatch(addToDo(input));
        setInput('')
    }
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};
export default TodoInput;
