import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ArticleCard (props) {
  return (

    // props are as follows
    // title - article title
    // image - article image
    // description - article description
    <Card style={{ width: '18rem', height: '36rem' }}>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body style={{flex: 1, overflow: 'auto'}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title>{props.source}</Card.Title>
        <Card.Text>{props.publish}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
          <Link to={`/read?url=${props.url}`}>
            <Button variant="outline-success">Read</Button>
          </Link>

        {/* OLD: Opens article/video in new tab */}
        {/* <Button variant="primary">
            <a href={props.url} target="_blank" style={{color:'White'}}>Read</a>
        </Button> */}

      </Card.Body>
    </Card>
  );
}

export default ArticleCard;