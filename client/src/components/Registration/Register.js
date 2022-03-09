import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Register() {

  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [deputies, setDeputies] = useState([])
  const handleClick = (e) => {
    e.preventDefault()
    const deputy = { username, email, password }
    console.log(deputy)
    fetch("http://localhost:8083/p2/deputy/add", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(deputy)
    }).then(() => {
      console.log("deputy added")
    })
  }

  useEffect(() => {
    fetch("http://localhost:8083/p2/deputy/getAllDeputies")
      .then(res => res.json())
      .then(result => {
        setDeputies(result);

      })
  }, [])


  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}><u>Add Deputy</u></h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="Deputy-username" label="Deputy Username" variant="outlined" fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <TextField id="standard-basic" label="Deputy Email" variant="standard" fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <TextField id="standard-basic" label="Deputy Password" variant="standard" fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <Button variant="outlined" color="secondary" onClick={handleClick}>Submit</Button>

          <Paper elevation={7} style={paperStyle}>
            {deputies.map(deputy => (
              <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={deputy.id}>
                Id: {deputy.id}<br />
                Username: {deputy.username}<br />
                Email: {deputy.email}
              </Paper>
            )
            )}
          </Paper>
        </Box>
      </Paper>
    </Container>
  )
}

export default Register