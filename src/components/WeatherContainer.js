import React, { Component } from "react";
import axios from "axios";
import "./style.css";

const apiKey = "30ee9893616e3df2972f668d886c2774";
export default class WeekContainer extends Component {
  state = {
    weather: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=-33.918861&lon=18.423300&appid=${apiKey}`
      )
      .then((res) => {
        //console.log(res.data);
        this.setState({ weather: res.data });
        console.log("res: ", res);
        console.log("weather: ", this.state.weather);
      });
  }

  render() {
    const { timezone } = this.state.weather;
    //I need to read temp and return it as h2
    //const { temp } = this.state.weather.current;
    return (
      <div>
        <div className="location">
          <h1 className="location-timezone"> {timezone}</h1>
          <p>icon</p>
        </div>

        <div className="temperature">
          <div className="degree-section">
            <h2 className="temperature-degree">temp</h2>
            <span>F</span>
          </div>
          <div className="temperature-description">It's very cold</div>
        </div>
      </div>
    );
  }
}
