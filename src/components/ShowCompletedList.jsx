function ShowCompletedList(props) {
  const { list } = props;
  const { setList } = props;

  function handleDelete(task) {
    const newList = list.filter((item) => item.task !== task);
    setList(newList);
  }

  const updateStatus = (task, newStatus) => {
    const newList = list.map((item) => {
      if (item.task === task) {
        item.completed = newStatus;
      }
      return item;
    });
    setList(newList);
  };

  return (
    <section className="show_completed_list">
      <h2>Completed:</h2>
      <ul>
        {list.map((item) => {
          if (item.completed === true) {
            return (
              <li key={item.task}>
                <button onClick={() => handleDelete(item.task)}>
                  Remove
                </button>
                {item.task}
                <button
                onClick={() => updateStatus(item.task, false)}
                >Move back to ToDo</button>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
}

export default ShowCompletedList;
