import React, { Component } from "react";
import Chart from "chart.js";

export default class LineChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    // ****************************************
    // Change this data to make it more dynamic
    // ****************************************
    const { data, tweet } = this.props;
    const tweetArr = Object.entries(tweet)
    const timeline = [];
    const bitcoinPrices = [];
    const tweetData = [];

    let j = 0;
    data.forEach(item => {
      j++;
      if (j < 70) {
        timeline.push(item.start_date);
        bitcoinPrices.push(item.start_price);
        // tweetData.push(item.tweet);
        tweetArr.forEach(tweet =>{
          tweetData[tweet[0]] = tweet[1];
          
        })
      }
    });

    const myChartRef = this.chartRef.current.getContext("2d");
    // changes to font colour
    Chart.defaults.global.defaultFontColor = "#fff";

    new Chart(myChartRef, {
      type: "line",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        showAllTooltips: true,
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Bitcoin Price"
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Year"
              }
            }
          ]
        },
        tooltips: {
          custom: function(tooltip) {
            if (!tooltip) return;
            // disable displaying the color box;
            tooltip.displayColors = false;
          },
          callbacks: {
            label: function(tooltipItem, data) {
              // console.log(data);
              // console.log(tooltipItem);

              // gets the index of the selected item
              // so the tweek can be pulled out from the index
              let i = tooltipItem.index;
              var initialText =
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ] || "";

              if (initialText) {
                initialText = "BitCoin Price: $" + initialText;
              }

              // returns the text you want to add
              // putting a comma adds a new line
              let body = null
              if (tweetData[i]) {
                body = [" ", initialText, " ", tweetData[i], " "];
              } else {
                body = [" ", initialText, " "];
              }

              return body;
            }
          }
        }
      },
      data: {
        labels: timeline,
        datasets: [
          {
            label: "John's Tweets",
            data: bitcoinPrices,
            fill: false,
            backgroundColor: "mitten",
            // add to change colour of the line
            borderColor: "#6610f2",
            // pointBackgroundColor: ["red", "green","white"],
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
