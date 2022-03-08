import React, { useState } from 'react'
import { Container, Row, Col, Image, Table } from 'react-bootstrap'

function RightLayout() {
    const [data, setData] = useState([
        {
            "id": "1",
            "fullname": "",
        }
    ]);
    const [hProps, setHProps] = useState([
        'id',
        'fullname'
    ]);
    return (
        <Container style={{ backgroundColor: 'black', padding: 0, border: 0, borderColor: 'gray', height: '100%' }}>
            <Row>
                <Col>
                    <Image src='rightLayout.png' style={{ height: '800px' }} wrapped ui={false} />
                    {/* <Table>
                        <tr>
                            <td>
                                <Image src='B9S9pQ.gif' style={{ width: '400px' }} wrapped ui={false} /></td>
                            <td>
                                <Image src='LimitedFrankCollie-max-1mb.gif' style={{ width: '400px' }} wrapped ui={false} /></td>
                        </tr>
                    </Table> */}
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default RightLayout