import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard (props) {
  return (

    // props are as follows
    // title - article title
    // image - article image
    // description - article description
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title>{props.source}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.publish}</Card.Text>
        <Button variant="primary">
            <a href={props.url} target="_blank" style={{color:'White'}}>Read</a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;