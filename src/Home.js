import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsCloudDownload } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
export default function Home() {
  return (
    <div>
      <div class="jumbotron">
        <div class="container">
          <p>
          A dedicated and results-oriented software engineer with experience in full-stack web development, automated testing, cloud development, and CI/CD. Leverages excellent communication and organizational skills to work effectively with technical and non-technical teams. A problem solver who can quickly learn technologies and integrate with teams to iteratively improve digital products to achieve organizational objectives.
          </p>
          <p>
          Check out my portfolio of projects below to get an idea of my skillset. Contact me today if you'd like to work together!
          </p>
          <Button>
            <span className="mr"><BsCloudDownload /></span>
            <span><a className="download" href="/resume.pdf">Download Resume</a></span>
          </Button>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Phil Social
                  </Card.Title>
                  <Card.Text>
                    A minimalist social network built on React and Django, featuring user accounts,
                    posts, and paging
                  </Card.Text>
                  <ButtonGroup>
                    <Button href="https://social.philmarshall.dev" target="_blank" variant='secondary'>
                      Live Site
                    </Button>
                    <Button href="https://github.com/phil-marshall-dev/phil-social" target="_blank" variant='secondary'>
                      See Code
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    React Duration Picker
                  </Card.Title>
                  <Card.Text>
                  A React component for picking durations of time. Inspired by Android number pickers.
                  </Card.Text>
                  <ButtonGroup>
                    <Button href="https://www.philmarshall.us/react-duration-picker/" target="_blank" variant='secondary'>
                      Live Site
                    </Button>
                    <Button href="https://github.com/flurmbo/react-duration-picker" target="_blank" variant='secondary'>
                      See Code
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}