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
      <section className="show_list_class">
        <h2>ToDo:</h2>
    <ul>
      {list.map((item) => {
        if (item.completed === false) {
          return (
            <li key={item.task}>
              <button type="button" className="list_button" onClick={() => handleDelete(item.task)}>
                Remove
              </button>
              {item.task}
              <button
                type="button"
                onClick={() => updateStatus(item.task, true)}
              >
                Completed
              </button>
            </li>
          );
        }
      })}
    </ul>
    </section>
  );
}

export default ShowList;
