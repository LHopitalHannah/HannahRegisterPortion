import React from 'react'
import { Card, Container, Row, Col, Table, Image, Button, ButtonGroup, Spinner } from 'react-bootstrap'


function CardView({ filteredData, setViewMode, setActiveProfileRow }) {
    return (
        <Container >
            <Row>
                {filteredData && filteredData.map((e, i) => (<>
                    <Col>
                        <Card style={{ paddingTop: '15px', height: '100%' }}>
                            {/* <MDBIcon style={{ textAlign: 'center' }} icon="camera-retro" size="5x" /> */}
                            <Image style={{ height: '300px' }} src={e.src} />
                            <Card.Body>
                                <Card.Title>{e.fullname}</Card.Title>
                                <Card.Text>
                                    {['alias'].map((c, j) => {
                                        return (<p key={`pm-${i}${j}`}>
                                            {e[c]}
                                        </p>)
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