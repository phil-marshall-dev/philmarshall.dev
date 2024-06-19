import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

const PortfolioCard = ({ title, text, siteLink, codeLink }) => {
    return (
        <Card className='h-100'>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <ButtonGroup>
                    <Button href={siteLink} target="_blank" variant='secondary'>
                        Live Site
                    </Button>
                    <Button href={codeLink} target="_blank" variant='secondary'>
                        See Code
                    </Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}
export default PortfolioCard;
