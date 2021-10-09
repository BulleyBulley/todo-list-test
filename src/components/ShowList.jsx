import { useState } from 'react'

function ShowList(props) {
  const { list } = props;
  const { setList } = props
  const [newListItem, setNewListItem] = useState();

  function handleDelete(task) {
    const newList = list.filter((item) => item.task !== task)

    setList(newList)
  }

  
  return (
    <ul>
      {list.map((item) => {
          if (item.completed === false) {
        return (
          <li key={item.task}>
            <button type="button" onClick={() => handleDelete(item.task)} >Remove Task</button>
            {item.task}
            <button type="button" >Move to Completed</button>
          </li>
        );
          }
      })}
    </ul>
  );
}

export default ShowList;
