import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




export function MovieCard({data}) {
  
  return (
    
    <Card className='MC' style={{ width: '10rem', backgroundColor:"black", borderRadius:"0%" }}>
      <Card.Img variant="top" src={data.imgUrl} />
      <Card.Body>
        <Card.Title style={{  color:"#e50814" }}>Movie Title:</Card.Title>
        <Card.Title style={{  color:"white" }}>{data.name}</Card.Title>
        <Card.Text style={{  color:"#e50814" }}>
          Description:
        </Card.Text>
        <Card.Text style={{  color:"white" }}>
          {data.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{  backgroundColor:"#101010", color:"white" }} >Rating: {data.rating}</ListGroup.Item>
      </ListGroup>
      <Link to = {`/description/${data.id}`}>
      <Button  style={{borderRadius:"0%", width:"100%"}} variant="danger">See Details</Button>
      </Link>
    </Card>
    
  );
}

MovieCard.propTypes={
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number
}