import "./Home.css";
import homeImage from "../../assets/Manage money.gif";
import homeImageDark from "../../assets/Investment data.gif";
import cardImageOne from "../../assets/E-Wallet-amico.svg";
import cardImageOneDark from "../../assets/E-Wallet-amico dark.svg";
import cardImageTwo from "../../assets/scrum method-amico.svg";
import cardImageTwoDark from "../../assets/scrum method-amico dark.svg";
import cardImageThree from "../../assets/Calculator-cuate.svg";
import cardImageThreeDark from "../../assets/Calculator-cuate dark.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/combineReducers";
import { Button, Container, Row, Col } from "react-bootstrap";
import HomeCard from "./HomeCard/HomeCard";
import Hero from "./Hero/Hero";
import UserAuthentication from "../Forms/UserAuthentication/UserAuthentication";
import { NavLink } from "react-router-dom";
import { showForm } from "../../actions/showFormActions";

function Home() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const isSignedIn = useSelector((state: RootState) => state.signedIn.signedIn);
  const showSignIn = () => {
    dispatch(showForm("signIn"));
  };

  return (
    <Container fluid>
      <Row>
        <Hero src={darkMode ? homeImageDark : homeImage} />
      </Row>
      <Row className="justify-content-center p-5">
        {isSignedIn ? (
          <Button className="home-signin-btn" size="lg">
            <NavLink to={"/portfolio"}>Go to portfolio</NavLink>
          </Button>
        ) : (
          <Button className="home-signin-btn" size="lg" onClick={showSignIn}>
            Sign Up / Sign In
          </Button>
        )}
      </Row>
      <Row className="align-items-start justify-content-around card-section">
        <Col xs={12} sm={10} md={8} lg={3}>
          <HomeCard
            src={darkMode ? cardImageOneDark : cardImageOne}
            cardTitle="Asset Management"
            cardText="Add various assets to your portfolio effortlessly. Whether it's cash, stocks, precious metals, or cryptocurrencies, we've got you covered."
          />
        </Col>
        <Col xs={12} sm={10} md={8} lg={3}>
          <HomeCard
            src={darkMode ? cardImageTwoDark : cardImageTwo}
            cardTitle="Real-time Updates"
            cardText="Keep track of the exact quantity and value of each asset in your portfolio with real-time updates."
          />
        </Col>
        <Col xs={12} sm={10} md={8} lg={3}>
          <HomeCard
            src={darkMode ? cardImageThreeDark : cardImageThree}
            cardTitle="Total Wealth Calculation"
            cardText="Total wealth is calculated by summing up all your assets, providing you with a clear picture of your financial health."
          />
        </Col>
      </Row>
      <UserAuthentication />
    </Container>
  );
}

export default Home;
