import React from "react";
import ReactCountryFlag from "react-country-flag";

function Start({ ip4, ip6, country }) {
  return (
    <div className="row">
      <div className="col">
        <img src="./src/assets/dude.png" />
      </div>
      <div className="col">
        <h2>Your current IP address:</h2>
        {ip4 && <p>IPv4: {ip4} </p>}
        {ip6 && <p>IPv6: {ip6} </p>}
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
      </div>
    </div>
  );
}

export default Start;
