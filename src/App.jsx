import React from "react";
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MapView from "./components/MapView";
import Start from "./components/Start";
import Timezone from "./components/Timezone";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const [ip, setIP] = useState("");
  const [isp, setISP] = useState("");
  const [proxy, setProxy] = useState("");
  const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState();
  const [position, setPosition] = useState();

  const getData = async () => {
    const res = await axios.get(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${
        import.meta.env.VITE_IPIFY_API_KEY
      }`
    );
    setPosition([res.data.location.lat, res.data.location.lng]);
    if (res.data.location.country) setCountry(res.data.location.country);
    if (res.data.ip) setIP(res.data.ip);
    if (res.data.isp) setISP(res.data.isp);
    if (res.data.proxy) setProxy(res.data.proxy);
  };

  const getCountryData = async () => {
    const res = await axios
      .get(`https://restcountries.com/v3.1/alpha/${country}`)
      .then((res) => {
        const data = res.data[0];
        setCountryInfo({
          name: data.name.common,
          flag: data.flags.png,
          capital: data.capital,
          population: data.population,
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (country) getCountryData();
  }, [country]);

  let dudeTexts = [
    <>
      Ey man, <br />
      whats my IP?!
    </>,
    <>
      Ey man, <br />
      whats my location?!
    </>,
    <>
      Ey man, <br />
      whats my time?!
    </>,
  ];
  return (
    <main className="container">
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">Ey Dude, whats my IP?!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/location" className="nav-link">
                  Location
                </NavLink>
                <NavLink to="/timezone" className="nav-link">
                  Timezone
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <Start
                ip={ip}
                isp={isp}
                country={country}
                dudeText={dudeTexts[0]}
              />
            }
          />
          <Route
            path="/location"
            element={<MapView position={position} dudeText={dudeTexts[1]} />}
          />
          <Route
            path="/timezone"
            element={<Timezone position={position} dudeText={dudeTexts[2]} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
