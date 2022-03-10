import React from 'react'
import { Card, Container, Row, Col, Table, Image, Button, ButtonGroup, Spinner } from 'react-bootstrap'


function CardView({ filteredData, setViewMode, setActiveProfileRow }) {
    return (
        <Container >
            <Row>
                {filteredData && filteredData.map((e, i) => (<>
                    <Col lg={3}>
                        <Card style={{ paddingTop: '15px', height: '100%', marginTop: '30px' }}>
                            {/* <MDBIcon style={{ textAlign: 'center' }} icon="camera-retro" size="5x" /> */}
                            <Image style={{ height: 'auto', width:'100%' }} src={e.src} />
                            <Card.Body>
                                <Card.Title>{e.fullname}</Card.Title>
                                <Card.Text style={{textAlign:'left'}}>
                                    {['alias', 'dob', 'height', 'weight'].map((c, j) => {
                                        return (
                                        <pre key={`pm-${i}${j}`}>
                                            {[c]}: {e[c]}
                                        </pre>)
                                    })}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className={"btn-primary"} variant="flat" onClick={() => {
                                    setViewMode('profile')
                                    setActiveProfileRow(i)
                                }}>View Details</Button>
                            </Card.Footer>
                        </Card>
                        {/* {['src'].map((c, j) => {
                            return (<Card><Image onClick={() => {

                            }} style={{ height: '200px' }} src={e[c]} />
                            </Card>)
                        })} */}
                        {/* {['fullname', 'alias', 'dob', 'sex', 'hair', 'eyes'].map((c, j) => {
                            return (<td key={`pm-${i}${j}`}>
                                {e[c]}
                            </td>)
                        })} */}
                    </Col>
                </>
                )
                )}
            </Row>

        </Container >
    )
}

export default CardView