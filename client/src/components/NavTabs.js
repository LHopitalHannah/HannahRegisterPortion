import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form, FormControl, Alert } from 'react-bootstrap';
// import Login from "./Users/LoginModal";
import axios from 'axios';
function NavTabs(
) {
    const authenticated = false;
    // const logout = () => { console.log('Logout') }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/"><h2>PAW-Roled</h2></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/perppage">Criminal Database</Nav.Link>
                        <Nav.Link href="/fact">Dog Facts</Nav.Link>
                        {/* <Nav.Link href="/perppage">File a Complaint</Nav.Link> */}

                        <Nav.Link href="/registerOffender">Register Offender</Nav.Link>
                        <Nav.Link href="#footer">About</Nav.Link>

                    </Nav>
                    <Nav className="">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                    <Button onClick={() => {
                        axios.get('https://randomuser.me/api/').then(e => {
                            console.log(e.data)
                        })
                    }}>Click</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default NavTabs;
