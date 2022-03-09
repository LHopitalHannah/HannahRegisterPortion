import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function RegisterOffender() {

  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [src, setSrc] = useState('');
  const [fullname, setFullname] = useState('');
  const [alias, setAlias] = useState('')
  const [dob, setDob] = useState('')
  const [sex, setSex] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [eyes, setEyes] = useState('')
  const [hair, setHair] = useState('')
  const [offenders, setOffenders] = useState([])
  const handleClick = (e) => {
    e.preventDefault()
    const offender = { src, fullname, alias, dob, sex, height, weight, eyes,hair}
    console.log(offender)
    fetch("http://localhost:8083/p2/offender/add", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(offender)
    }).then(() => {
      console.log("offender added")
    })
  }

  // useEffect(() => {
  //   fetch("http://localhost:8083/p2/offender/getAllOffender")
  //     .then(res => res.json())
  //     .then(result => {
  //       setOffenders(result);

  //     })



  // }, [])


  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}><u>Add Offender</u></h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="offender-src" label="Image-src" variant="outlined" fullWidth
            value={src}
            onChange={(e) => setSrc(e.target.value)}
          />
          <br></br>
          <TextField id="offender-fullname" label="Full Name" variant="standard" fullWidth
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <br></br>
          <TextField id="offender-alias" label="Alias" variant="standard" fullWidth
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
          <br></br>
          <TextField id="offender-dob" label="DOB" variant="outlined" fullWidth
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <br></br>
          <TextField id="offender-sex" label="Sex" variant="outlined" fullWidth
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          />
          <br></br>
          <TextField id="offender-height" label="Height(feet and inches)" inches variant="outlined" fullWidth
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br></br>
          <TextField id="offender-weight" label="Weight(lbs)" variant="outlined" fullWidth
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br></br>
          <TextField id="offender-eyes" label="Eye color" variant="outlined" fullWidth
            value={eyes}
            onChange={(e) => setEyes(e.target.value)}
          />
          <br></br>
          <TextField id="offender-hair" label="Hair color" variant="outlined" fullWidth
            value={hair}
            onChange={(e) => setHair(e.target.value)}
          />
          <br></br>

          <Button variant="outlined" color="secondary" onClick={handleClick}>Submit</Button>

          {/* <Paper elevation={7} style={paperStyle}>
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

              </Paper> */}


            {/* )


            )}



          </Paper> */}


        </Box>
      </Paper>
    </Container>

  )
}

export default RegisterOffender