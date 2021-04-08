import {Col, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    return (
        <Row>
            <Col>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#home"><img className="sn-logo" src="/sn/logo.svg"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link href="/"><Nav.Link >Home</Nav.Link></Link>
                            <Link href="/over"><Nav.Link >Over ons</Nav.Link></Link>
                            <NavDropdown title="Lidmaatschap" id="lidmaatschap">
                                <Link href="/"><NavDropdown.Item>Lid worden</NavDropdown.Item></Link>
                                <Link href="/"><NavDropdown.Item>Installeren</NavDropdown.Item></Link>
                                <Link href="/"><NavDropdown.Item>Veelgestelde vragen</NavDropdown.Item></Link>
                                <NavDropdown.Divider/>
                                <Link href="/"><NavDropdown.Item>Lidmaatschap opzeggen</NavDropdown.Item></Link>
                            </NavDropdown>
                            <Link href="/verhuur"><Nav.Link >Verhuur</Nav.Link></Link>
                            <NavDropdown title="Veiligheid" id="veiligheid">
                                <Link href="/privacy-statement"><NavDropdown.Item >Privacy statement</NavDropdown.Item></Link>
                                <Link href="/sociale-veiligheid"><NavDropdown.Item >Sociale veiligheid</NavDropdown.Item></Link>
                            </NavDropdown>
                            <Link href="/contact"><Nav.Link >Contact</Nav.Link></Link>
                        </Nav>
                        <Nav>
                            <Nav.Link target="_blank" href="https://www.facebook.com/scoutinga15">facebook.com/scoutinga15</Nav.Link>
                            <Nav.Link target="_blank" href="http://www.scoutshop.nl">Scoutshop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    )
}
