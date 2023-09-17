import "./Hero.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface HeroProps {
  src: string;
}

function Hero({ src }: HeroProps) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={5}>
          <img src={src} id="hero-image" />
        </Col>
        <Col xs={12} lg={5} className="py-5">
          <h1 className="py-3 hero-header">
            <b>Welcome to Mosaic</b>
          </h1>
          <h2 className="py-2 hero-header">
            <i>Taking Control of Your Financial Future</i>
          </h2>
          <p className="hero-paragraph">
            Are you ready to unlock the power of financial control and wealth
            management? Introducing Mosaic, your ultimate companion on the
            journey to financial prosperity.
          </p>
          <h2 className="py-2 hero-header">
            <i>What is Mosaic?</i>
          </h2>
          <p className="hero-paragraph">
            Mosaic is the all-in-one solution for managing your wealth and
            assets. With just a few taps, you can take charge of your financial
            well-being by tracking your investments and assets seamlessly.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
