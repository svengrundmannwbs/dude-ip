import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MapView from "./components/MapView";
import Start from "./components/Start";
import Timezone from "./components/Timezone";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const [ip4, setIP4] = useState("");
  const [ip6, setIP6] = useState("");
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState();

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setPosition([res.data.latitude, res.data.longitude]);
    if (res.data.country_code) setCountry(res.data.country_code);
    if (res.data.IPv4) setIP4(res.data.IPv4);
    if (res.data.IPv6) setIP6(res.data.IPv6);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="container">
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Ey Dude, whats my IP?!</Navbar.Brand>
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
            element={<Start ip4={ip4} ip6={ip6} country={country} />}
          />
          <Route path="/location" element={<MapView position={position} />} />
          <Route path="/timezone" element={<Timezone position={position} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
