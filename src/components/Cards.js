import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Row>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={props.t.flags.png}
            alt={props.t.flags.alt}
          />
          <Card.Body>
            <Card.Title>{props.t.name.common}</Card.Title>
            <Card.Text>
              <div>Population:{props.t.population}</div>
              <div>Region:{props.t.region}</div>
              <div>Capital:{props.t.capital}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
