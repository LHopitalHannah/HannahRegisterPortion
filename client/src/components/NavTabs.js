import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form, FormControl, Alert } from 'react-bootstrap';
import FileComplaint from "./FileComplaint/FileComplaint";
// import Login from "./Users/LoginModal";

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
                        {/* <Nav.Link href="/perppage">File a Complaint</Nav.Link> */}
                        <FileComplaint />
                        <Nav.Link href="#footer">About</Nav.Link>
                    </Nav>
                    <Nav className="">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavTabs;
