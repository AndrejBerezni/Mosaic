import "./HomeCard.css";
import Card from "react-bootstrap/Card";

interface IHomeCardProps {
  src: string;
  cardTitle: string;
  cardText: string;
}

function HomeCard({ src, cardTitle, cardText }: IHomeCardProps) {
  return (
    <Card className="home-card my-3">
      <Card.Img variant="top" src={src} className="home-card-img" />
      <Card.Body className="home-card-body">
        <Card.Title className="my-3">{cardTitle}</Card.Title>
        <Card.Text className="home-card-text">{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
