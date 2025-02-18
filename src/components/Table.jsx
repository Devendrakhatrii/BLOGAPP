import React from 'react'

const  Table = (header,body) => {
  return (
    <div>
        <table border = {1}>
    <thead>
        <tr>
            {header.map((item,index) => {
                return <th key = {index}>{item}</th>;
            })}
        </tr>
    </thead>
    <tbody>
        {body.length > 0 ? (
            body.map((item,index) => {
                return (
                    <tr key = {index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>{item.userId}</td>
                    <td>{item.tags}</td>
                    <td>{item.reaction}</td>
                    
                </tr>
                );

            })
        ):(
            <tr>
                <td colSpan = {header.length} style = {{textAlign:"center"}}>
                    No body
                    </td>
            </tr>
        ) }

    </tbody>
</table>
    </div>
  )
};
export default Table;
