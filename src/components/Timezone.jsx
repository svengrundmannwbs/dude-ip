import React from "react";
import { DateTime } from "luxon";
import Dude from "./Dude";

function Timezone({ position, dudeText }) {
  let dt = DateTime.now();
  dt.zoneName;
  dt.offset;
  dt.daysInMonth;
  return (
    <div className="row g-0 content">
      <div className="col left">
        <Dude dudeText={dudeText} />
      </div>
      <div className="col mt-5 right">
        <div>
          <h1>Your TimeZone</h1>
          <p>Name: "{dt.zoneName}"</p>
          <p>TimeOffset: {dt.offset}</p>
          <p>DaysInMonth: {dt.daysInMonth}</p>
        </div>
      </div>
    </div>
  );
}

export default Timezone;
