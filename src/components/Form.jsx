import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Weather from "./Weather";

const Form1 = () => {
  const [city, setCity] = useState("");
  const [list, setList] = useState([]);
  const [cityInfo, setCityInfo] = useState([]);

  function change(event) {
    setCity(event.target.value);
  }
  let submit = async (e) => {
    e.preventDefault();

    console.log("I am submit handler function");

    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`
      );

      console.log("response: ", response);

      setList(response.data.list);
      setCityInfo({
        name: response.data.city.name,
        country: response.data.city.country,
        population: response.data.city.population,
      });
    } catch (error) {
      console.log("error in api call: ", error);
    }
  };

  return (
    <div>
      <Form inline="true" className="form" onSubmit={submit}>
        <Row>
          <Col xs="auto">
            <h4>Enter the City:</h4>
          </Col>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="City name"
              className=" mr-sm-2 "
              onChange={change}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      {list.map((item, index) => (
        <Weather
          key={index}
          date={item.dt_txt}
          temperature={item.main.temp}
          humidity={item.main.humidity}
          sea={item.main.sea_level}
          max={item.main.temp_max}
          min={item.main.temp_min}
          city={cityInfo.name}
          country={cityInfo.country}
          population={cityInfo.population}
        />
      ))}
    </div>
  );
};

export default Form1;
