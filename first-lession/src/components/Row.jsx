import React from "react";
const Row = ({userId,id ,title,body,onDelete}) =>{
    return (
        <React.Fragment>
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
    </React.Fragment>
    )
}
export default Row;