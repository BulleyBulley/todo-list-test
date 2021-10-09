import { useState } from "react";

function ListAdd(props) {
  const { setList } = props;
  const [newListItem, setNewListItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setList((currList) => {
      const itemToAdd = { task: newListItem, completed: false };
      const updatedList = [...currList, itemToAdd];

      return updatedList;
    });
    setNewListItem("");
  }

  return (
    <section>
      <h2> ToDo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Task:</label>
        <input
          type="text"
          required
          value={newListItem}
          onChange={(event) => setNewListItem(event.target.value)}
          
        />

        <button type="submit"> Add Task </button>
      </form>
    </section>
  );
}

export default ListAdd;
