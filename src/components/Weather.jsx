import React from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";

const Weather = ({date,temperature ,country,city, population,humidity,sea,max,min }) => {
  return (
    <div className="weather text-center">
      <h2>{moment(date).format("dddd ha")}</h2>
      <h4 className="heading">{temperature}</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Humidity</th>
            <th>Sea-level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{country}</td>
            <td>{city}</td>
            <td>{population}</td>
            <td>{humidity}</td>
            <td>{sea}</td>
            
          </tr>
        </tbody>
      </Table>
      <h4 className="footer">{min} - {max}</h4>
    </div>
  );
};

export default Weather;
