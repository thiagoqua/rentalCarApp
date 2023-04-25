import { Col, Container, Row } from "react-bootstrap";
import "./Components.css";

export function About(): JSX.Element {
  return (
    <div className="about" id="about">
        <Container>
          <Row>
            <Col lg={12}>
              <h2>About Rosario on Wheels</h2>
              <p className="lead">
                Rosario on Wheels is the premier car rental service in Rosario,
                Santa Fe. Our mission is to provide high-quality, reliable, and
                affordable car rentals to our customers.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p>
                We are located in the heart of Rosario, making it convenient for
                our customers to pick up and drop off their rental cars. Our
                fleet consists of a wide range of vehicles, including sport
                cars, hatchbacks, luxury cars, sedans, family cars, SUVs,
                off-road vehicles, and pick-up trucks.
              </p>
              <p>
                At Rosario on Wheels, we take pride in our exceptional customer
                service. Our team of dedicated professionals will go above and
                beyond to ensure that our customers have a seamless rental
                experience.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="https://www.example.com/about.jpg"
                alt="Rosario on Wheels office"
                className="img-fluid"
              />
            </Col>
          </Row>
      </Container>
    </div>
  );
}
