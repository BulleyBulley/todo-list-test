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
    <section className="list_add_class">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo"><h2>Task:</h2></label>
        <input
          type="text"
          className="input_box"
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
