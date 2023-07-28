import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsCloudDownload } from "react-icons/bs";
export default function Home() {
  return (
    <div>
      <div class="jumbotron">
        <div class="container">
          <p>
            An experienced developer with hands-on knowledge of all aspects of the Software Development
            Life Cycle, including frontend, backend, CI/CD, and cloud development.
            Check out the examples below to see examples of my code.
            Contact me today if you'd like to work together!
          </p>
          <Button>
            <span className="mr"><BsCloudDownload/></span>
            <span>Download Resume</span>
          </Button>
        </div>
      </div>
      <div>
      <Container>
      <Row>
        <Col>
          <h1>
            Book Club
          </h1>
          <p>
            A full stack app that lets users explore and favorite books as retrieved by the
            Open Library Books API
          </p>
          <ButtonGroup>
            <Button variant='secondary'>
              Live site
            </Button>
            <Button variant='secondary'>
              See code
            </Button>
          </ButtonGroup>
        </Col>
        <Col>To come</Col>
        <Col>To come</Col>
      </Row>
    </Container>
      </div>
    </div>
  );
}