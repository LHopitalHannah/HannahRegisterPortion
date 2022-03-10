import React from 'react'
import { Carousel, Card, Alert, Button, Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function Home() {
    return (<>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="CarouselImage1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 style={{ fontSize: '35px' }}>You have the right to remain adorable</h3>
                    <p>But if you give up that right to be adorable, by doing something "naughty",</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="CarouselImage2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 style={{ textAlign: 'left', fontSize: '35px' }}>The PAW-Leashed Department (PLD)</h3>
                    <p style={{ textAlign: 'left', width: 600 }}>We will look for you. We will find you. We will embarrass you. - Liam Neeson</p>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <section style={{ backgroundColor: '#282c34', height: 60 }} className="section section-icons grey lighten-4 center">
            <div>Home</div>
        </section>
        <section className="section section-icons grey lighten-4 center">
            <h1>Top Most Wanted</h1>
        </section>
        <section style={{ backgroundColor: '#f4f4f4' }} className="section section-icons grey lighten-4 center">
            <Container style={{ height: '100%' }}>
                <Row style={{ height: '100%' }}>
                    <Col>
                        <Card style={{ paddingTop: '15px', height: '100%' }}>
                            {/* <MDBIcon style={{ textAlign: 'center' }} fab icon="amazon" size="5x" /> */}
                            <Card.Img variant="top" src="images (3).jfif" />
                            <Card.Body>
                                <Card.Title>We've got what you need!</Card.Title>
                                <Card.Text>
                                    Not all dogs go to heaven. Some dogs need to learn a leason or two. And Pawroled can help.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/register' >
                                    <Button className={"btn-primary"} variant="flat">Get Started!</Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ paddingTop: '15px', height: '100%' }}>
                            {/* <MDBIcon style={{ textAlign: 'center' }} icon="camera-retro" size="5x" className="center" /> */}
                            <Card.Img variant="top" src="images (4).jfif" />
                            <Card.Body>
                                <Card.Title>At Your Service</Card.Title>
                                <Card.Text>
                                    Pawroled has weeks of experirience is reasearch and treatment. And we know our pets are way more intuitive than they pretend to be. They are fully aware when they are the target or mockery and humiliation.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/register' >
                                    <Button className={"btn-primary"} variant="flat">Get Started!</Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ paddingTop: '15px', height: '100%' }}>
                            {/* <MDBIcon style={{ textAlign: 'center' }} icon="camera-retro" size="5x" /> */}
                            <Card.Img variant="top" src="images (1).jfif" />
                            <Card.Body>
                                <Card.Title>Let's Get In Touch!</Card.Title>
                                <Card.Text>
                                    Ready to start fixing your broken dog? Help us help you. Register as a deputy, and start helping your dog.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/register' >
                                    <Button className={"btn-primary"} variant="flat">Get Started!</Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        <div id="footer" ></div>

    </>
    )
}

export default Home