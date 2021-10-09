function ShowList(props) {
    const { list } = props;
    


    return (   
        <ul>
            {list.map((item) => {
                return <li key={item.task}>{item.task}</li>
            })}
        </ul>
    )
}

export default ShowList