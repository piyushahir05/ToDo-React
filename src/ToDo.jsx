import { useState } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { ToDoDateTime } from "./components/ToDoDateTime";
import { getLocalStorageData, setLocalStorageData } from "./components/ToDoLocalStorage";
import "./ToDo.css";

export const ToDo = () => {
  const [task, setTask] = useState(() => getLocalStorageData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const ifToDoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifToDoContentMatched) return;

    setTask((prevTask) => [
      ...prevTask,
      { id: id, content: content, checked: checked },
    ]); //spread operator
  };

  const handleDeleteButton = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  const handleCheckToDo = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
  };

  const handleClearAllBtn = () => {
    setTask([]);
  };

  setLocalStorageData(task);

  return (
    <>
      <section className="main">
        <header className="header">
          <h1>Todo List</h1>
          <ToDoDateTime />
        </header>
        <ToDoForm onAddToDo={handleFormSubmit} />

        <section className="unorderList">
          <ul>
            {task.map((currTask, index) => {
              return (
                <ToDoList
                  key={currTask.id}
                  data={currTask.content}
                  checked={currTask.checked}
                  onDeleteToDo={handleDeleteButton}
                  onCheckToDo={handleCheckToDo}
                />
              );
            })}
            <button className="clear-btn" onClick={handleClearAllBtn}>
              Clear All
            </button>
          </ul>
        </section>
      </section>
    </>
  );
};
