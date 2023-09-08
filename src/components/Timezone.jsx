import React from "react";
import { DateTime } from "luxon";

function Timezone({ position }) {
  let dt = DateTime.now();
  dt.zoneName; //=> 'America/New_York'
  dt.offset; //=> -240
  dt.daysInMonth; //=> 30
  return (
    <div className="row">
      <div className="col">
        <img src="./src/assets/dude.png" />
      </div>
      <div className="col">
        <div>
          <h1>TimeZoneShennanigans</h1>
          <p>TimeZone: {dt.zoneName}</p>
          <p>Offset: {dt.offset}</p>
          <p>DaysInMonth: {dt.daysInMonth}</p>
        </div>
      </div>
    </div>
  );
}

export default Timezone;
