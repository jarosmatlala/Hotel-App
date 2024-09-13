import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerStyles.css"; 
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import { useEffect } from "react";
import RoomNavbar from "./RoomNavbar";



function DatePickerWithLayout() {
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(null);
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      const docRef = doc(db, "bookings", "booking-id"); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBookingDetails(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchBookingDetails();
  }, []);



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

      {bookingDetails && (
          <div className="summary">
            <h4>Booking Summary</h4>
            <p><strong>Room:</strong> {bookingDetails.roomType}</p>
            <p><strong>Price:</strong> {bookingDetails.price}</p>
            <p><strong>Check-In Date:</strong> {selectedCheckInDate ? selectedCheckInDate.toDateString() : "Not selected"}</p>
            <p><strong>Check-Out Date:</strong> {selectedCheckOutDate ? selectedCheckOutDate.toDateString() : "Not selected"}</p>
          </div>
        )}


    </div>
    </>
  );
}

export default DatePickerWithLayout;
