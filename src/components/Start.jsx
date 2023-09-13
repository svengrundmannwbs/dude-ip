import React from "react";
import ReactCountryFlag from "react-country-flag";
import Dude from "./Dude";

function Start({ ip, isp, proxy, country, dudeText }) {
  return (
    <div className="row g-0 content">
      <div className="col left">
        <Dude dudeText={dudeText} />
      </div>
      <div className="col mt-5 right">
        <h2>Your current IP address:</h2>
        {ip ? <p>IP: {ip} </p> : <p>not found</p>}
        {isp ? <p>Your ISP: {isp}</p> : ""}
        {proxy ? <p>Proxy detected! {proxy}</p> : ""}
        {country ? (
          <ReactCountryFlag
            countryCode={country}
            svg
            style={{
              width: "3em",
              height: "3em",
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
