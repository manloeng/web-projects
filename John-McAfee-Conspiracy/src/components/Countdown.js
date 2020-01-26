import React, { Component } from "react";
import "./countdown.css";
import styled from "styled-components";

const StyledCountdownTitle = styled.p`
  display: flex;
  position: absolute;
  margin-top: 275px;
  left: 67%;
  font-size: 30px;
`;

class Countdown extends Component {
  state = {
    remaining: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    },
    isExpired: false
  };
  timer;
  distance;

  componentDidMount() {
    this.setDate();
    this.counter();
  }

  setDate = () => {
    const { targetDate, targetTime } = this.props,
      now = new Date().getTime(),
      countDownDate = new Date(targetDate + " " + targetTime).getTime();

    this.distance = countDownDate - now;

    if (this.distance < 0) {
      clearInterval(this.timer);
      this.setState({ isExpired: true });
    } else {
      this.setState({
        remaining: {
          days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((this.distance % (1000 * 60)) / 1000)
        },
        isExpired: false
      });
    }
  };

  counter = () => {
    this.timer = setInterval(() => {
      this.setDate();
    }, 1000);
  };

  render() {
    const { remaining, isExpired } = this.state,
      { targetDate, targetTime } = this.props;

    return (
      <>
        <StyledCountdownTitle>COUNTDOWN TO PENIS EATING</StyledCountdownTitle>
        <div className="counter-wrapper">
          {!isExpired && targetDate && targetTime ? (
            <div className="counter">
              {Object.entries(remaining).map((el, i) => (
                <div key={i} className="entry">
                  <div key={el[1]} className="entry-value">
                    <span className="count top curr flipTop">{el[1] + 1}</span>
                    <span className="count top next">{el[1]}</span>
                    <span className="count bottom next flipBottom">
                      {el[1]}
                    </span>
                    <span className="count bottom curr">{el[1] + 1}</span>
                  </div>
                  <div className="entry-title">{el[0].toUpperCase()}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default Countdown;
