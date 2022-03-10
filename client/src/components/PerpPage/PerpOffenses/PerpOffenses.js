import React from 'react'
import { Table, Button, ButtonGroup } from 'react-bootstrap';

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
                        {hProps.map((c, j) => (<th key={j}>{c}</th>))}
                        <th>
                            controls
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((e, i) => {
                        return (<tr key={i}>
                            {/* <td><Button varient="danger" size="sm">Del</Button></td> */}
                            {hProps.map((c, j) => (<td key={`${c}-${j}`}>{e[c]}</td>))}
                            <td>
                                <ButtonGroup>
                                    <Button className={"btn-primary"} variant="flat">Edit</Button>
                                    <Button className={"btn-primary"} variant="danger" onClick={() => deleteOffense(e.id)}>{JSON.stringify(e)}Delete</Button>
                                </ButtonGroup>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default PerpOffenses