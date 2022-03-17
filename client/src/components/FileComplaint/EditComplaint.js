import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal, Table, Form, FloatingLabel, Image, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

function EditComplaint(props) {

    const [data, setData] = useState(
        props.data
    );
    const [state, setState] = useState({})

    

    const [submitData, seSubmitData] = useState({
        offenseDate: "",
        offenseDescription: "",
        id: data.id
    })

    const handleDateChange = event => {
        console.log('data:', data)
        seSubmitData({
            ...submitData,
            offenseDate: event.target.value,
        });
    }

    const handleDescriptionChange = event => {
        seSubmitData({
            ...submitData,
            offenseDescription: event.target.value,
        });
    }

    useEffect(() => {
        console.log(submitData)
    }, [submitData])

    useEffect(() => {
        console.log(submitData)
    }, [props.data])

    // const [data, setData] = useState(
    //     {
    //         "src": "images (a).png",
    //         "fullname": "Guilty",
    //         "alias": "Guilty",
    //         "dob": "FEB 09, 2022",
    //         "sex": "M",
    //         "height": "2' 2\"",
    //         "weight": "BRN",
    //         "eyes": "BRN",
    //         "hair": "BRN",
    //         "offenses": [
    //             {
    //                 "date": "2022/02/22",
    //                 "offense": "Did a lot of bad things",
    //             },
    //             {
    //                 "date": "2022/02/22",
    //                 "offense": "Did a lot of bad things",
    //             },
    //             {
    //                 "date": "2022/02/22",
    //                 "offense": "Did a lot of bad things",
    //             }
    //         ]
    //     }
    // );


    const [lgShow, setLgShow] = useState(false);

    const formChange = (e) => {
        console.log("", e.target.files[0]);

        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded.bind(this)
            reader.readAsBinaryString(file)
        }
    }

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result
        setState({ base64TextString: btoa(binaryString) })
    }

    // useEffect(() => {

    //     console.log('submitData: ', JSON.stringify(submitData))
    // }, [submitData, data])

    const submitOffense = (e) => {

        e.preventDefault();

        console.log('submitOffense:submitData: ', submitData)
        axios.put(`http://localhost:8083/p2/offense/put`, submitData)
            .then(res => {
                console.log('axios.post');
                console.log(res.data);
                // props.setData([...data, submitData])
            }).catch(e => {
                console.log(e)
            })
    }

    const handleSubmit = event => {
        // if (value) {
        //   setList(list.concat(value));
        // }

        // setValue('');

        event.preventDefault();
    };

    return (
        <>
            <Button onClick={() => setLgShow(true)}>Edit Complaint</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit Complaint
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* {state !== {} ? <><img style={{ width: 500 }} src={`data:image/jpeg;charset=utf-8;base64, ${state.base64TextString}`} />
                        <div> {`data:image/jpeg;charset=utf-8;base64, ${state.base64TextString}`} </div>
                    </> : null} */}

                    {/* <Form onChange={(e) => formChange(e)} onSubmit={submitOffense} >
                        <input
                            type="file"
                            name="image"
                            id="file"
                            accept=".jpg"
                        />
                        <input type="submit" />


                    </Form> */}
                    <Container><Row><Col lg={4}>
                    {/* <Image src={props.data.src} style={{ height: 300 }} wrapped ui={false} />  */}
                    </Col>
                        <Col lg={8}>
                            <Table style={{ textAlign: 'left', width: '90%' }}>
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
                        </Col></Row></Container>
                    <Form  >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Date"
                                name="date"
                                // ref={dateInput}
                                 
                                onChange={handleDateChange}
                            />
                            <Form.Text className="text-muted">
                                Please provide a description of the incedent.
                            </Form.Text>
                        </Form.Group>

                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                name="offeseDescription"
                            
                                onChange={handleDescriptionChange}
                            // ref={offenseDescriptionInput}
                            />
                        </FloatingLabel>
                        <br />
                        <Button variant="primary" type="submit" onClick={submitOffense}>
                            Submit Changes
                        </Button>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditComplaint