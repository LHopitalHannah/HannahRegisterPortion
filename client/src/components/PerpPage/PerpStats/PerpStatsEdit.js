import React, { useEffect, useState } from 'react'
import { Table, Form, Button } from 'react-bootstrap';
import axios from 'axios'
function PerpStatsEdit({ data, setData, setEditStats }) {

    const [submitData, setSubmitData] = useState({
        "id": data.id,
        "src": data.src,
        "fullname": data.fullname,
        "alias": data.alias,
        "dob": data.dob,
        "sex": data.sex,
        "height": data.height,
        "weight": data.weight,
        "eyes": data.eyes,
        "hair": data.hair
    })

    const onChangeHandler = (e) => {
        console.log(e.target.name, " ", e.target.value)
        setSubmitData({ ...submitData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log('submitData: ', submitData)
    }, [submitData])


    const submitForm = () => {
        console.log('submitForm: ', submitData)
        setEditStats(false)
        setData(submitData)

        axios.put('http://localhost:8083/p2/offender/put', submitData)
            .then(res => {
                console.log('axios.post');
                console.log(res.data);

                // props.setData([...data, submitData])
            }).catch(e => {
                console.log(e)
            })
    }

    return (
        <Table style={{ color: 'white', textAlign: 'left' }}>
            <tr>
                <td colSpan={4}>
                    {/* <h3>{data.fullname}</h3> */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name="fullname" value={submitData.fullname} onChange={onChangeHandler} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                </td>
            </tr>
            <tr>
                <td colSpan={4}>
                    {/* <h6>Alias: {data.alias}<br />Affiliation(s): PWA (Puppies with Attitude)</h6> */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Alias</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name="alias" value={submitData.alias} onChange={onChangeHandler} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    {/* Dob {data.dob} */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>DOB</Form.Label>
                        <Form.Control type="date" placeholder="Enter email" name="dob" value={submitData.dob} onChange={onChangeHandler} style={{ width: '150px' }} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                </td>
                <td colSpan={2} >
                    LIC. CLASS
                    C
                </td>
            </tr>
            <tr>
                <td>
                    {/* Sex {data.sex} */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Sex</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" style={{ width: '50px' }} name="sex" value={submitData.sex} onChange={onChangeHandler} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                </td>
                <td colSpan={2} >
                    {/* Hair {data.hair}                     */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Hair</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" style={{ width: '50px' }} name="hair" value={submitData.hair} onChange={onChangeHandler} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                </td>
                <td>
                    {/* Eyes {data.eyes}                     */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Eyes</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" style={{ width: '50px' }} name="eyes" value={submitData.eyes} onChange={onChangeHandler} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                </td>
            </tr>
            <tr>
                <td>
                    {/* Ht {data.ht}                     */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" style={{ width: '50px' }} name="height" value={submitData.height} onChange={onChangeHandler} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                </td>
                <td colSpan={2} >
                    {/* Wt {data.wt} */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" style={{ width: '50px' }} name="weight" value={submitData.weight} onChange={onChangeHandler} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
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
            <tr><td><Button onClick={() => submitForm()} >Submit</Button></td></tr>
        </Table>
    )
}

export default PerpStatsEdit