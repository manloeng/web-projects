import React from "react";
import styled, { keyframes } from "styled-components";
import "../App.css";
import John from "../media/john.jpg";
import Coin from "../media/coin.jpg";
import Tweet from "../media/tweet.png";
import { Link } from "@reach/router";
import Countdown from "./Countdown";

function rotationBuilder(degree) {
  const rotation = keyframes`
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-${degree}deg);
      }
      50% {
        transform: rotate(0deg);
        opacity: .9
      }
      75% {
        transform: rotate(${degree}deg);
      }
    `;
  return rotation;
}

const JohnImg = styled.img`
  width: 800px;
  height: 550px;
  position: absolute;
  top: 0;
  margin-top: 340px;
  display: flex;
`;

const BitcoinImg = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  margin-bottom: 200px;
  margin-right: 50px;
  top: 55%;
  right: 65%;
  animation: ${rotationBuilder(10)} 1s linear infinite;
`;

const TweetImg = styled.img`
  width: 400px;
  height: 175px;
  border-radius: 3px;
  position: absolute;
  margin-top: 475px;
  left: 64%;
  font-size: 30px;
`;

const StyledDescription = styled.p`
  display: flex;
  justify-content: center;
  margin-left: 80px;
  margin-right: 80px;
  color: white;
  font-size: 30px;
  position: absolute;
`;

const Dashboard = () => {
  return (
    <>
      <StyledDescription>
        We at the JMCC have been working around the clock to prove that in order
        to save his own penis, John McAfee has been manipulating the price of
        Bitcoin using a combination of inflammatory language and a Twitter
        profile.
        <br />
        Follow the Bitcoin to reveal the truth...
        <br />
        And feast your eyes on the biggest kept secret in Finance.
      </StyledDescription>
      <div className="DashboardWrapper">
        <JohnImg src={John} alt="John McAfee" />
        <Countdown targetDate="Oct 31, 2020" targetTime="00:00:00" />
        <Link to="/proof">
          <TweetImg src={Tweet} alt="John McAfee tweet" />
        </Link>
        <Link to="/bitcoin">
          <BitcoinImg src={Coin} alt="Bitcoin" />
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
