import { Col, Row, Carousel } from "react-bootstrap";
import Image from 'next/image';

export default function Header() {
    return (
        <Row>
            <Col>
                <Carousel controls={false} indicators={false} >
                    <Carousel.Item className="header-carousel">
                        <Image
                            src="/unsplash/pioneren.jpg"
                            layout="fill"
                            objectPosition="center"
                            objectFit="cover"
                        />
                        <Carousel.Caption>
                            <h3>Welkom bij Scouting A15</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    )
}
