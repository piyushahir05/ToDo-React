import { useState } from "react";

export const ToDoForm = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({id:value,content:value,checked:false});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddToDo(inputValue);
    setInputValue({id:"",content:"",checked:false});
  };

  return (
    <div className="to-do">
      <form onSubmit={handleFormSubmit}>
        <div className="todo-input">
          <input
            type="text"
            value={inputValue.content}
            autoComplete="off"
            onChange={(event) => handleInputChange(event.target.value)}
            className="task-input"
          ></input>
          <button className="todo-btn">Add Task</button>
        </div>
      </form>
    </div>
  );
};
