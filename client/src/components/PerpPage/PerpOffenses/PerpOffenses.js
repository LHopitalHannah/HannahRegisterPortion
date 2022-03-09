import React from 'react'
import { Table, Button } from 'react-bootstrap';

function PerpOffenses({ hProps, data }) {

    async function deleteOffense(id) {
        const response = await fetch(`http://localhost:8083/p2/offense/delete/id?id=${id}`, {
          method: "DELETE",
        });
        console.log(`Deleting ${id}`);
        //window.location.reload(false);
        return response.json();
    }

    return (
        <>
            <Table style={{ color: 'white' }}>
                <tr>
                    <td colSpan={2}>
                        Record History
                    </td>
                </tr>

            </Table>
            <Table striped hover variant="dark" size="sm">
                <thead>
                    <tr>
                        {/* <th>
                            controls
                        </th> */}
                        {hProps.map((c, j) => (<th key={j}>{c}</th>))}
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((e, i) => {
                        return (<tr key={i}>
                            {/* <td><Button varient="danger" size="sm">Del</Button></td> */}
                            {hProps.map((c, j) => (<td key={`${c}-${j}`}>{e[c]}</td>))}
                            <td><Button className={"btn-primary"} variant="flat">Edit</Button></td>
                            <td><Button className={"btn-primary"} variant="flat" onClick={() => deleteOffense(e.id)}>Delete</Button></td></tr>)
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default PerpOffenses