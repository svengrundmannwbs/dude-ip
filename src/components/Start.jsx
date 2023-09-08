import React from "react";
import ReactCountryFlag from "react-country-flag";
import dude from "../assets/dude.png";

function Start({ ip, isp, proxy, country }) {
  return (
    <div className="row">
      <div className="col">
        <img src={dude} />
      </div>
      <div className="col">
        <h2>Your current IP address:</h2>
        {ip ? <p>IP: {ip} </p> : <p>not found</p>}
        {isp ? <p>Your ISP: {isp}</p> : ""}
        {proxy ? <p>Proxy detected! {proxy}</p> : ""}
        {country ? (
          <ReactCountryFlag
            countryCode={country}
            svg
            style={{
              width: "2.5em",
              height: "2em",
            }}
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            cdnSuffix="svg"
          />
        ) : (
          <p>Couldnt get country, dude!</p>
        )}
      </div>
    </div>
  );
}

export default Start;
