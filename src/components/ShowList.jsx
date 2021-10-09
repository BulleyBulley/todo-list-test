function ShowList(props) {
    const { list } = props;
    


    return (   
        <ul>
            {list.map((item) => {
                return <li key={item.task}>
                    <button>Remove Task</button>
                    {item.task}
                    <button>Move to Completed</button>
                </li>
            })}
        </ul>
    )
}

export default ShowList