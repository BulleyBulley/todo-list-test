function ShowList(props) {
    const { list } = props;
    console.log(list)


    return (
        <ul>

            {list.map((item) => {
                return <li key={item}>{item}</li>
            })}
        </ul>
    )


}

export default ShowList