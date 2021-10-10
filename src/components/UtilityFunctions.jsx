import { useState } from "react";
import props from '../App'

console.log(props)

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

  export {handleDelete, updateStatus}