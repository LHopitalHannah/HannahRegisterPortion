import React from 'react'
import { Table } from 'react-bootstrap';

function PerpStats({ data }) {
  return (
    <Table style={{ color: 'white', textAlign: 'left' }}>
      <tr>
        <td colSpan={4}>
          <h3>{data.fullname}</h3>
        </td>
      </tr>
      <tr>
        <td colSpan={4}>
          <h6>Alias: {data.alias}<br />Affiliation(s): PWA (Puppies with Attitude)</h6>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          Dob {data.dob}
        </td>
        <td colSpan={2} >
          LIC. CLASS
          C
        </td>
      </tr>
      <tr>
        <td>
          Sex {data.sex}
        </td>
        <td colSpan={2} >
          Hair {data.hair}
        </td>
        <td>
          Eyes {data.eyes}
        </td>
      </tr>
      <tr>
        <td>
          Ht {data.ht}
        </td>
        <td colSpan={2} >
          Wt {data.wt}
        </td>
        <td >
          Dl 123123
        </td>
      </tr>
      <tr>
        <td colSpan={2} >
          Issued 11/26/09
        </td>
        <td colSpan={2} >
          Expires 11/26/19
        </td>
      </tr>
      <tr>
        <td colSpan={4}>
          Misc. and State Specific Info.
        </td>
      </tr>
      <tr>
        <td>
        </td>
      </tr>
    </Table>
  )
}

export default PerpStats