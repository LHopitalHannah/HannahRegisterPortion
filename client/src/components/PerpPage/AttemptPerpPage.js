import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function AttemptPerpPage() {

  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }

  const [offenders, setOffenders] = useState([]);

  const deleteOffender = (e) => {
    const id = e.target.getAtrribute("id")
    fetch(`http://localhost:8083/p2/offender/delete/id?id=${id}`, { method: 'DELETE' })
  }

  const offenderTable = offenders.map((o) => (
      <tr key={o.id}>
          <td><Button variant="dark" onClick={deleteOffender}>Delete</Button></td>
          <td>{o.src}</td>
          <td>{o.fullname}</td>
          <td>{o.alias}</td>
          <td>{o.dob}</td>
          <td>{o.sex}</td>
          <td>{o.height}</td>
          <td>{o.weight}</td>
          <td>{o.eyes}</td>
          <td>{o.hair}</td>
      </tr>
  ));




  async function fetchOffenders() {
      const response = await fetch("http://localhost:8083/p2/offender/getAllOffender");
      const fetchedOffenders = await response.json();
      setOffenders(fetchedOffenders);
  }

  useEffect(() => {
    fetchOffenders();
}, []);

  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Delete</th>
                <th>Src</th>
                <th>Fullname</th>
                <th>Alias</th>
                <th>DOB</th>
                <th>Sex</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Eyes</th>
                <th>Hair</th>
            </tr>
        </thead>
        <tbody>{offenderTable}</tbody>
    </table>
</>
);
}
/* <Container>
  <Paper elevation={7} style={paperStyle}>
  {offenders.map(offender => (
    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={offender.id}>
      Id: {offender.id}<br />
      src: {offender.src}<br />
      FullName: {offender.fullname}<br />
      Alias: {offender.alias}<br />
      DOB: {offender.dob}<br />
      Sex: {offender.sex}<br />
      Height: {offender.height}<br />
      Weight: {offender.weight}<br />
      Eyes: {offender.eyes}<br />
      Hair: {offender.hair}

    </Paper>


  )


  )}



</Paper>
</Container> */







export default AttemptPerpPage