import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";

const dogUrl = "https://dog.ceo/api/breeds/image/random";

function Dog() {
    const[userData, setUserData] = useState({})

    useEffect(()=> {
        getDogFactWithAxios();

    }, []);

    const getDogFactWithAxios = async () => {
        const response = await axios.get(dogUrl);
        setUserData(response.data);
        console.log(response.data);
    }

    return(
        <div className = "Dog">
            <header className="Dog-header">
                <h2>Random dog pic!!!</h2>
            </header>

            <div className="pic-container">
                <h5 className="header">Look at this beautiful pupper!</h5>
                {/* <h5 className="header">Offender Is Rehabilitated</h5> */}
                <img src = {userData.message}></img>
                <h2>How To Tell if an Offender Is Rehabilitated</h2>
                <img src="Cesar_Millan_Mar_2018.png" style={{height:'300px'}}></img>
                <p>Ten percent of the criminologists listed in the 1978 Membership Directory of the American Society of Criminology were sent questionnaires. Four distinct viewpoints emerged concerning 'complete rehabilitation:' (1) the skeptic rejects the concept of anyone being completely rehabilitated; (2) the legalist defines 'complete rehabilitation' as the absence of any recurrent law violation; (3) the good citizen view of 'complete rehabilitation' holds that the former offender must be law abiding, have a job, and not constitute a 'drain' on society; (4) finally, the 'idyllic' citizen assumption is that 'complete rehabilitation' offenders are those who in addition to being law abiding are also ideal citizens. The completely rehabilitated offender would show a number of psychological strengths: self-control in the face of stress, frustration, or provocation; trustworthiness, with personal and global priorities; and high self-esteem. One figure shows the positive attributes of 'completely rehabilitated' felons; these are divided into work and economic attributes, other economic attributes, prosocialization attributes, and psychological 'strength' attributes. They include self-support, compensation for the crime victim, marital stability, and no drug use. Negative attributes -- divided into work and economic attributes, antisocial attributes, and psychological weakness attributes -- are listed in a second figure.</p>
            </div>


        </div>

    )


}

export default Dog