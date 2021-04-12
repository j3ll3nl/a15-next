import Layout from '../components/layout'
import { usePlugin } from 'tinacms'
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import { useMarkdownForm } from 'next-tinacms-markdown'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export default function Home({ markdownFile }) {

    const formOptions = {
        label: 'Site Config',
        fields: [
            {
                name: 'frontmatter.title',
                label: 'Title',
                component: 'text',
            },
            {
                name: 'frontmatter.description',
                label: 'Description',
                component: 'text',
            },
            {
                name: 'markdownBody',
                label: 'Body',
                component: 'markdown',
            },
        ],
    }

    const [homePage, homeForm] = useMarkdownForm(markdownFile, formOptions);

    usePlugin(homeForm);

    return (
        <Layout>
            <Row className="15-block-blue content">
                <Col lg="4">
                    <Image src="https://www.scoutinghoogeveen.nl/modules/mod_scoutingshowcase/images/haken.png"></Image>
                </Col>
                <Col>
                    <Card>
                        <Card.Title>Welkom bij Scouting A15</Card.Title>
                        <Card.Body><ReactMarkdown>{homePage.markdownBody}</ReactMarkdown></Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="content speltakken">
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/bevers_RGB.png" />
                        <Card.Title>Bevers</Card.Title>
                        <Card.Subtitle>5 t/m 7 jaar</Card.Subtitle>
                        <Card.Body>De jongste groep jongens en meiden bij Scouting A15</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/welpen_RGB.png" />
                        <Card.Title>Welpen</Card.Title>
                        <Card.Subtitle>7 t/m 11 jaar</Card.Subtitle>
                        <Card.Body>Deze jongens zijn niet te stoppen in Jungle Book</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/welpen_RGB.png" />
                        <Card.Title>Shanti's</Card.Title>
                        <Card.Subtitle>7 t/m 11 jaar</Card.Subtitle>
                        <Card.Body>Deze meiden doen de stoerste dingen in Jungle Book</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/scouts_RGB.png" />
                        <Card.Title>Verkenners</Card.Title>
                        <Card.Subtitle>11 t/m 15 jaar</Card.Subtitle>
                        <Card.Body>Jongens vol met energie. Niet te stoppen.</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/scouts_RGB.png" />
                        <Card.Title>Meidenscouts</Card.Title>
                        <Card.Subtitle>11 t/m 15 jaar</Card.Subtitle>
                        <Card.Body>Deze meiden zijn altijd in voor gezelligheid.</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/scouts_RGB.png" />
                        <Card.Title>Blauwe vogels</Card.Title>
                        <Card.Subtitle>Verstandelijk beperkt 18+</Card.Subtitle>
                        <Card.Body>Jongens en meiden die overal voor in zijn.</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/explorers_RGB.png" />
                        <Card.Title>Explorers</Card.Title>
                        <Card.Subtitle>15-18</Card.Subtitle>
                        <Card.Body>Jongens en meiden die zelf de uitdagen opzoeken.</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/roverscouts_RGB.png" />
                        <Card.Title>Roverscouts</Card.Title>
                        <Card.Subtitle>18-21</Card.Subtitle>
                        <Card.Body>Jongens en meiden die scout zijn naar een nieuw niveau brengen.</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/roverscouts_RGB.png" />
                        <Card.Title>Stam Aflag 26</Card.Title>
                        <Card.Subtitle>21+</Card.Subtitle>
                        <Card.Body>Alle leiding, vrijwilligers en gezellig mensen die soms toffe activiteiten ondernemen met elkaar.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}

export async function getStaticProps() {
    const infoData = await import(`../content/index.md`);
    const data = matter(infoData.default);

    return {
        props: {
            markdownFile: {
                fileRelativePath: `content/index.md`,
                frontmatter: data.data,
                markdownBody: data.content,
            }
        },
    }
}
