import React from "react";
import { DateTime } from "luxon";
import Dude from "./Dude";

function Timezone({ position, dudeText }) {
  let dt = DateTime.now().toLocaleString(DateTime.DATE_FULL);
  let yt = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);
  let nyTime = DateTime.now()
    .setZone("America/New_York")
    .toLocaleString(DateTime.TIME_SIMPLE);
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
          <p>Your Date {dt}</p>
          <p>Your Time {yt} Uhr</p>
          <p>Time in NYC: {nyTime} Uhr</p>
        </div>
      </div>
    </div>
  );
}

export default Timezone;
