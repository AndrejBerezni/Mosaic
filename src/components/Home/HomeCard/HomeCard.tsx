import "./HomeCard.css";
import Card from "react-bootstrap/Card";

interface HomeCardProps {
  src: string;
  cardTitle: string;
  cardText: string;
}

function HomeCard({ src, cardTitle, cardText }: HomeCardProps) {
  return (
    <Card className="home-card">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text className="home-card-text">{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
