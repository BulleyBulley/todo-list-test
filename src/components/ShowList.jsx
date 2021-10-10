import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ShowList(props) {
  const { list } = props;
  const { setList } = props;

  <DragDropContext onDragEnd={handleOnDragEnd}></DragDropContext>;

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

  function handleOnDragEnd(result) {
    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setList(items);
  }

  return (
    <section className="show_list_class">
      <h2>ToDo:</h2>
      
        <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((item, index) => {
                if (item.completed === false) {
                  return (
                    <Draggable
                      key={item.task}
                      draggableId={item.task}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <button
                            type="button"
                            className="list_button"
                            onClick={() => handleDelete(item.task)}
                          >
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
                      )}
                    </Draggable>
                  );
                }
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}

export default ShowList;
