import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <Container fluid>
        <Row>
            <Col className="a15-grass" />
        </Row>
        <Row className="a15-footer">
            <Col className="pd-1">
                <h2>Meer informatie:</h2>
                <ul>
                    <li>
                        <a href="https://www.scouting.nl" target="_blank">Scouting Nederland</a>
                    </li>
                    <li>
                        <a href="https://.nl" target="_blank">Regio Biesbosch</a>
                    </li>
                    <li>
                        <a href="https://www.scoutshop.nl" target="_blank">Scoutshop</a>
                    </li>
                </ul>
                <p>
                    Copyright © 2021 Scouting A15 <br/>
                    Dit is de officiele website van Scouting A15 in Hardinxveld-Giessendam
                </p>
            </Col>
            <Col>
                <h2>Vind ons ook op:</h2>
                <a className="social" href="https://www.facebook.com/scoutinga15"><FontAwesomeIcon icon={faFacebookSquare} color="white" size="2x" /></a>
                <a className="social" href="https://www.instagram.com/scoutinga15"><FontAwesomeIcon icon={faInstagramSquare} color="white" size="2x" /></a>
            </Col>
        </Row>
        </Container>
    )
}
