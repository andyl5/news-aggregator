import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard (props) {
  return (

    // props are as follows
    // title - article title
    // image - article image
    // description - article description
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">
            {/* <a></a> */}
            Read
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;