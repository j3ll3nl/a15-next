import Layout from '../components/layout'
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";

export default function Home() {
    return (
        <Layout>
            <Row>
                <Col lg="3">
                    <Card>
                        <Card.Title>Bevers</Card.Title>
                        <Card.Subtitle>5 t/n 7 jaar</Card.Subtitle>
                        <Card.Body>De jongste groep jongens en meiden bij Scouting A15</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Title>Welpen</Card.Title>
                        <Card.Subtitle>7 t/n 11 jaar</Card.Subtitle>
                        <Card.Body>Deze jongens zijn niet te stoppen in Jungle Book</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Title>Shanti's</Card.Title>
                        <Card.Subtitle>7 t/m 11 jaar</Card.Subtitle>
                        <Card.Body>Deze meiden doen de stoerste dingen in Jungle Book</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Title>Verkenners</Card.Title>
                        <Card.Subtitle>11 t/m 15 jaar</Card.Subtitle>
                        <Card.Body></Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Title>Meidenscouts</Card.Title>
                        <Card.Subtitle>11 t/m 15 jaar</Card.Subtitle>
                        <Card.Body>De jongste groep jongens en meiden bij Scouting A15</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Title>Blauwe vogels</Card.Title>
                        <Card.Subtitle>Verstandelijk beperkt 18+</Card.Subtitle>
                        <Card.Body>De jongste groep jongens en meiden bij Scouting A15</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Title>Roverscouts</Card.Title>
                        <Card.Subtitle>18-21</Card.Subtitle>
                        <Card.Body>De jongste groep jongens en meiden bij Scouting A15</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Title>Stam Aflag 26</Card.Title>
                        <Card.Subtitle>18+</Card.Subtitle>
                        <Card.Body>Alle leiding, vrijwilligers en gezellig mensen die soms toffe activiteiten ondernemen met elkaar</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="15-block-blue">
                <Col lg="4">
                    <Image src="https://www.scoutinghoogeveen.nl/modules/mod_scoutingshowcase/images/haken.png"></Image>
                </Col>
                <Col>
                    <Card>
                        <Card.Title>Welkom bij Scouting A15</Card.Title>
                        <Card.Body>De avontuurlijkste jeugdvereniging van Hardinxveld!</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}
