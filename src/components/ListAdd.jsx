import {useState} from 'react'

function ListAdd(props) {

    const { setList } = props
    const [newListItem, setNewListItem] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        setList((currList) => {
            const itemToAdd = newListItem
            const updatedList = [...currList, itemToAdd]
            console.log(updatedList)
            return updatedList;
        })
        setNewListItem('')
    }

    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor='todo'>
                ToDo:
            </label>
            <input
            type="text"
            required
            value={newListItem}
            onChange={(event) => setNewListItem(event.target.value)}
        />
        
        <button type="submit"> Add Task </button>
        </form>
    )
}

export default ListAdd;