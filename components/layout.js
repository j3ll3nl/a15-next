import Head from 'next/head'
import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from 'react-bootstrap/Alert';
import {Container, Button, Navbar, Nav, NavDropdown, Row, Col, Image, Card} from 'react-bootstrap'
import Footer from "./footer";
import Navigation from "./navigation";
import Header from "./header";

export default function Layout({
                                   children,
                                   title = 'This is the default title',
                               }) {
    return (
        <Container fluid className="layout">
            <Navigation/>
            <Header/>
                {children}
            <Footer/>
        </Container>
    )
}
