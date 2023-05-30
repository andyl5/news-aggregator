import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ArticleCard (props) {

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    const articleData = {
      url: props.url,
      title: props.title,
      author: props.author
    };

    setLoading(true);

    fetch('/read', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(articleData)
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle response

        setLoading(false);
      });
  };

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
        <Link to={`/read?url=${props.url}&title=${props.title}&author=${props.author}&source=${props.source}&publish=${props.publish}`}>
          <Button variant="outline-success" onClick={handleClick}>Read</Button>
        </Link>

      </Card.Body>
    </Card>
  );
}

export default ArticleCard;