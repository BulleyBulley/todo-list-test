function ShowCompletedList (props) {
    const { list } = props;
    
    
    return (   
        <section>
            <h2>Completed</h2>
        <ul>
            {list.map((item) => {
                if (item.completed === true) {

                return <li key={item.task}>
                    <button>Remove Completed Task</button>
                    {item.task}
                    <button>Move back to ToDo</button>
                </li>
                }
            })}
        </ul>
        </section>
    )
}

export default ShowCompletedList