import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({data,onDeleteToDo,onCheckToDo,checked}) => {
    return(
  <li className="todo-item">
    <span className={checked? "checkList":"notCheckList"}>{data}</span>
    <button className="check-btn">
      <MdCheck onClick={()=>onCheckToDo(data)}/>
    </button>
    <button className="delete-btn" onClick={() =>onDeleteToDo(data)}>
      <MdDeleteForever />
    </button>
  </li>
    );
};
