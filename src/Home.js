import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioCard from './PortfolioCard';
import { BsCloudDownload } from "react-icons/bs";
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
              <PortfolioCard
                title='Phil Social'
                text='A minimalist social network built on React and Django, featuring user accounts, posts, and paging.'
                siteLink='https://social.philmarshall.dev'
                codeLink='https://github.com/phil-marshall-dev/phil-social'
              />
            </Col>
            <Col>
              <PortfolioCard
                title='React Duration Picker'
                text='A React component for picking durations of time. Inspired by Android number pickers.'
                siteLink='https://www.philmarshall.us/react-duration-picker/'
                codeLink='https://github.com/flurmbo/react-duration-picker'
              />
            </Col>            <Col>
              <PortfolioCard
                title='Esperanto Association of Minnesota'
                text='The homepage of the Esperanto Association of Minnesota, which works to connect Esperanto speakers throughout the Land of 10,000 Lakes.'
                siteLink='https://esperanto-mn.org/'
                codeLink='https://github.com/phil-marshall-dev/esperanto-mn.org'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}