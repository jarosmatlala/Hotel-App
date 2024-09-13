import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerStyles.css"; 
import RoomNavbar from "./RoomNavbar";


function DatePickerWithLayout() {
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(null);
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(null);

  return (


    <>
    <RoomNavbar/>

    <br />
    <br />
    <br />
  
    <div className="calendar-container">
      <div className="search-box">
        {/* <div className="search-item">Filter Room</div> */}
        <div className="search-item">
          <label>Check In</label>
          <DatePicker
            selected={selectedCheckInDate}
            onChange={(date) => setSelectedCheckInDate(date)}
            placeholderText="Select Check-In Date"
           
          />
        </div>
        <div className="search-item">
          <label>Check Out</label>
          <DatePicker
            selected={selectedCheckOutDate}
            onChange={(date) => setSelectedCheckOutDate(date)}
            placeholderText="Select Check-Out Date"
          />
        </div>
        <div className="search-item">Proceed</div>
      </div>
    </div>
    </>
  );
}

export default DatePickerWithLayout;
