import React, { Component } from "react";
import "../App.css";
import "./bitcoin.css";
import LineChart from "./LineChart";
import BitcoinTweets from "../media/bitcointweets.png";
import axios from "axios";
import styled from "styled-components";
import joy from "../media/joy.png";
import smileys from "../media/isjohnok.png";

const BitcoinTweetsImg = styled.img`
  height: 600px;
  width: 900px;
`;

const P = styled.p`
  font-size: 30px;
  margin-right: 150px;
  margin-left: 150px;
`;

const JoyImg = styled.img`
  height: 600px;
  width: 900px;
`;

const SmileyImg = styled.img`
  height: 600px;
  width: 800px;
`;

const H1 = styled.h1`
  margin-top: 35px;
`;

class Bitcoin extends Component {
  state = {
    data: null,
    tweet: null
  };

  componentDidMount = () => {
    const getBitCoin = axios.get("http://45d6d9a3.ngrok.io/get-bitcoin");
    const getTweet = axios.get("http://45d6d9a3.ngrok.io/get-tweets");
    let prevKey = null;
    let dateArr = [];

    return Promise.all([getBitCoin, getTweet]).then(([a, b]) => {
      console.log(a.data);
      b.data.forEach(tweet => {
        const key = Object.keys(tweet);
        if (key[0] !== prevKey) {
          prevKey = key[0];
          dateArr.push(key[0]);
        }
      });
      
    console.log(b.data)
    let newTweetObj = {}
    // newTweetObj[13] = newTweetObj[b.data[13].2019-10-20] 
    newTweetObj[12] = `Stoned masturbation: Brain sends signal to hand. Hand sends signal back - It's in the queue. I'll get back to you on scheduling.`
    newTweetObj[15] = `Bitcoin jitters? Just stop it! Short term fluctuations are meaningless. Bitcoin is still up almost 300% from 6 month's ago. Everytime there's a dip I have to calm people in replies. DMs. etc. GET A GRIP! You know in your heart Bitcoin cannot lose.Relax!`
    newTweetObj[20] = `Yahoo Finance now talking about zombies. What is the world coming to?`
    newTweetObj[24] = `Asked how much I get:For which project? The zombie one? A huge amount. So much that it would be embarrasing to divulge. No .... so much that the average person would sell their grandmother into slavery for. Enough to make most folks lie. deceive. cheat and steal. That project?`
    newTweetObj[53] =`In America. was illegal to drink alcohol from 1920 to 1933. Constitutional Ammendment 18. Only amendment to be repealed. You can't legislate personal desires. If you want to use Crypto. you will do so. Can't be forced to do otherwise. Governments have no power in this decision.`
    newTweetObj[64] = `Can you trust  We hold no funds at any time. You interact with smart contracts on the Blockchain - your funds are always secured.  You use your own authorized wallet. No fear of bad management or owners - there are no owners.There is no trust needed.`
    newTweetObj[36] = `The Area 51 Raid takeaway comment:Do not cross that line and watch out for rattlesnakes!`
    newTweetObj[37] = `Government 101. Lesson 2 - the real reason that government's fear Cryptocurrencies.`
    newTweetObj[38] = `Blockchain has the power to give artists and musicians the ownership of their own creation. The upcoming @BeatzCoin IEO on† †from September 30 will power the VibraVid platform to liberate countless artists &amp; reward them for their work.` 
    newTweetObj[39] = `Politics are the same everywhere. In America - ban/don't ban firearms. In Englend. now. - ban/don't ban sharp knives. Next will be pointed sticks. They are all distractions - sleights of hand - to distract us from the horror behind governments' curtains.`
    // console.log(newTweetObj)

      //   const index = dateArr.findIndex(key[0])
      //   console.log(index)
      // })
      this.setState({ data: a.data, tweet: newTweetObj });
    });
  };

  render() {
    const { data, tweet } = this.state;
    return (
      <>
        <div className="bitcoinSection">
          <h1>BITCOIN PRICE GRAPH</h1>
          {data && <LineChart data={data} tweet={tweet}></LineChart>}
        </div>
        <h1>BITCOIN PRICE/ TWEET DENSITY CORRELATION GRAPH</h1>
        <BitcoinTweetsImg src={BitcoinTweets} />
        <P>
          Using sophisticated data analysis, we compared the density of tweets
          issued from John McAfee's Twitter account against the price of
          Bitcoin, and discovered a suspiciously high correlation between the
          two.
          <br />
          We propose that McAfee's promise to 'eat my own dick on national
          television' if the price of Bitcoin has not reached $1 million by the
          31st December 2020, is driving the market.
          <br />
          McAfee's activity on twitter has coincided with spikes in Bitcoin
          price - and his lack of activity, with lulls.
          <br />
          Want to know when to invest in Bitcoin? Look no further than "
          @officialmcafee ".
        </P>
        <H1>SENTIMENT GRAPH 'JOY' TWEETS</H1>
        <JoyImg src={joy} />
        <H1>CHART SPIKE - IS JOHN OKAY?</H1>
        <SmileyImg src={smileys} />
      </>
    );
  }
}

export default Bitcoin;
