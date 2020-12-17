const Row = ({userId,id ,title,body,onDelete}) =>{
    return (
        <tr>
        <td>{userId}</td>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
            <button>Edit</button>
            <button onClick={(e)=>{
                onDelete(id)
            }}>Del</button>
        </td>
    </tr>
    )
}
export default Row;