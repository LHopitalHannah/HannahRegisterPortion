import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Image, ProgressBar, Button } from 'react-bootstrap'
import PerpStats from './PerpStats/PerpStats';
import PerpOffenses from './PerpOffenses/PerpOffenses';
import FileComplaint from '../FileComplaint/FileComplaint'

function LeftLayout(props) {
    const [data, setData] = useState(props.data);
    const [hProps, setHProps] = useState([
        'offenseDate',
        'offenseDescription'
    ]);

    useEffect(() => {
        console.log('LeftLayout')
        console.log(data)
    }, [data])

    const [psychologicalProfile, setPsychologicalProfile] = useState(
        `Very "Naughty";
(OCD) Obsesive Compulsive Disorder - for Chew Toy;
Extremely food motivated;
Constantly Demands for Belly Rubs;
Advise: Approach with Caution`);
    return (
        <Container style={{ backgroundColor: 'black', padding: 20, border: 10, borderColor: 'gray', height: '100%', color: 'white' }}>
            <Row>
                <Col>
                    <ProgressBar animated now={100} variant="dark" />
                    <Table style={{ color: 'white' }} striped bordered hover variant="dark">
                        <tr>
                            <th>
                                <h5>The Paw-Leashed Department</h5>
                            </th>
                            <th>
                                <h5>ID#: wqeqeeewr435sfw4sdv</h5>
                            </th>
                        </tr>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <Table style={{ color: 'white' }} striped bordered hover variant="dark">
                                    <tr>
                                        <th>
                                            {/* <h5>The Paw-Leashed Department</h5> */}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={props.data.src} style={{ height: 500 }} wrapped ui={false} />
                                        </td>
                                    </tr>
                                </Table>
                                <Image src={"pawprints.png"} style={{ width: '100%' }} wrapped ui={false} />
                            </Col>
                            <Col>
                                <PerpStats data={props.data} />
                                <Table variant="dark" style={{ color: 'white' }}>
                                    <tr>
                                        <td>
                                            Psychological Profile
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left', fontSize: 14, backgroundColor: 'gray', color: 'black', lineHeight: 1, padding: 11 }}>
                                            {/* <pre style={{ fontSize: 12, textAlign: 'left', backgroundColor: '#474747', lineHeight: 1}}> */}
                                            {psychologicalProfile}
                                            {/* </pre> */}
                                        </td>
                                    </tr>
                                </Table>

                                <PerpOffenses hProps={hProps} data={data.offenses} />
                                <FileComplaint data={data} setData={setData} />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default LeftLayout