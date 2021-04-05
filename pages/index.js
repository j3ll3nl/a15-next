import Layout from '../components/layout'
import { usePlugin } from 'tinacms'
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import { useMarkdownForm } from 'next-tinacms-markdown'
import matter from 'gray-matter'

export default function Home({ markdownFile }) {

    const formConfig = {
        id: markdownFile.fileRelativePath,
        label: 'Edit Post',
        fields: [
            {
                name: 'title',
                label: 'Title',
                component: 'text',
            },
            {
                name: 'markdownContent',
                label: 'content',
                component: 'markdown',
            }
        ],
        initialValues: {
            title: markdownFile.frontmatter.title,
            markdownContent: markdownFile.frontmatter.markdownContent
        },
    };

    const [homePage, homeForm] = useMarkdownForm(markdownFile, formConfig);

    usePlugin(homeForm);

    return (
        <Layout>
            <Row>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/bevers_RGB.png" />
                        <Card.Title>{ homePage.title }</Card.Title>
                        <Card.Subtitle>5 t/n 7 jaar</Card.Subtitle>
                        <Card.Body>De jongste groep jongens en meiden bij Scouting A15</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/welpen_RGB.png" />
                        <Card.Title>Welpen</Card.Title>
                        <Card.Subtitle>7 t/n 11 jaar</Card.Subtitle>
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
                        <Card.Body></Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/scouts_RGB.png" />
                        <Card.Title>Meidenscouts</Card.Title>
                        <Card.Subtitle>11 t/m 15 jaar</Card.Subtitle>
                        <Card.Body>De jongste groep jongens en meiden bij Scouting A15</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/scouts_RGB.png" />
                        <Card.Title>Blauwe vogels</Card.Title>
                        <Card.Subtitle>Verstandelijk beperkt 18+</Card.Subtitle>
                        <Card.Body>De jongste groep jongens en meiden bij Scouting A15</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/explorers_RGB.png" />
                        <Card.Title>Explorers</Card.Title>
                        <Card.Subtitle>15-18</Card.Subtitle>
                        <Card.Body>Jongens en meiden die zelf de uitdagen opzoeken</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/roverscouts_RGB.png" />
                        <Card.Title>Roverscouts</Card.Title>
                        <Card.Subtitle>18-21</Card.Subtitle>
                        <Card.Body>De jongste groep jongens en meiden bij Scouting A15</Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card style={{textAlign: 'center'}}>
                        <Card.Img style={{width: '50%', margin: 'auto', marginBottom: '2em'}} src="/sn/roverscouts_RGB.png" />
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

export async function getStaticProps() {
    const data = matter.read(`content/index.md`);

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
