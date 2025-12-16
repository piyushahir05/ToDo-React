const toDoKey = "reactToDo";

export const getLocalStorageData =  () =>{
   const rawToDos= localStorage.getItem(toDoKey);
    if(!rawToDos)
    return [];
    return JSON.parse(rawToDos);
}

export const setLocalStorageData = (task) =>{
   return localStorage.setItem(toDoKey,JSON.stringify(task));
}