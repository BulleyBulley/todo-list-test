import { useState } from "react";

function ShowList(props) {
  const { list } = props;
  const { setList } = props;

  function handleDelete(task) {
    const newList = list.filter((item) => item.task !== task);
    setList(newList);
  }

  const updateStatus = (task, newStatus) => {
    const newList = list.map((item) => {
        if (item.task === task) {
            item.completed = true
        }
        return item
    })
    setList(newList)
  }
  
  return (
    <ul>
      {list.map((item) => {
        if (item.completed === false) {
          return (
            <li key={item.task}>
              <button type="button" onClick={() => handleDelete(item.task)}>
                Remove Task
              </button>
              {item.task}
              <button
                type="button"
                onClick={() => updateStatus(item.task, true)}
              >
                Move to Completed
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default ShowList;
