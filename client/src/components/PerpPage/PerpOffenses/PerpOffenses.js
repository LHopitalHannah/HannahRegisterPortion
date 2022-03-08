import React from 'react'
import { Table } from 'react-bootstrap';

function PerpOffenses({ hProps, data }) {
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
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((e, i) => {
                        return (<tr key={i}>
                            {hProps.map((c, j) => (<td key={`${c}-${j}`}>{e[c]}</td>))}
                        </tr>)
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default PerpOffenses