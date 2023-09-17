import "./Home.css";
import homeImage from "../../assets/Manage money.gif";
import homeImageDark from "../../assets/Investment data.gif";
import cardImageOne from "../../assets/E-Wallet-amico.svg";
import cardImageOneDark from "../../assets/E-Wallet-amico dark.svg";
import cardImageTwo from "../../assets/scrum method-amico.svg";
import cardImageTwoDark from "../../assets/scrum method-amico dark.svg";
import cardImageThree from "../../assets/Calculator-cuate.svg";
import cardImageThreeDark from "../../assets/Calculator-cuate dark.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/combineReducers";
import Button from "react-bootstrap/Button";
import HomeCard from "./HomeCard/HomeCard";
import Hero from "./Hero/Hero";

function Home() {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const isSignedIn = useSelector((state: RootState) => state.signedIn.signedIn);
  return (
    <>
      <Hero src={darkMode ? homeImageDark : homeImage} />
      <HomeCard
        src={darkMode ? cardImageOneDark : cardImageOne}
        cardTitle="Asset Management"
        cardText="Add various assets to your portfolio effortlessly. Whether it's cash, stocks, precious metals, or cryptocurrencies, we've got you covered."
      />
      <HomeCard
        src={darkMode ? cardImageTwoDark : cardImageTwo}
        cardTitle="Real-time Updates"
        cardText="Keep track of the exact quantity and value of each asset in your portfolio with real-time updates."
      />
      <HomeCard
        src={darkMode ? cardImageThreeDark : cardImageThree}
        cardTitle="Total Wealth Calculation"
        cardText="Total wealth is calculated by summing up all your assets, providing you with a clear picture of your financial health."
      />
      <Button id="home-signin-btn" size="lg">
        {isSignedIn ? "Go to portfolio" : "Sign Up / Sign In"}
      </Button>
    </>
  );
}

export default Home;
