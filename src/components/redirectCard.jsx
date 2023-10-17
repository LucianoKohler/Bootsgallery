import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';


export default function RedirectCard(props) {
  return (

        <Card className="col-11 col-sm-2 h-100 m-3">
          <Card.Img style={{width: "100%", aspectRatio: 1/1}} variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text style={{height: "48px"}}>{props.text}</Card.Text>
            <Link to={props.to} className="btn btn-dark m-3 justify-content-center">
              Dar uma olhada
              </Link>
          </Card.Body>
        </Card>
  );
}