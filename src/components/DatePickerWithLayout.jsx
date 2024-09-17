import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerStyles.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import RoomNavbar from "./RoomNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CancelOutlined } from "@mui/icons-material";
import OrderConfirmed from "./OrderConfirmed";

function DatePickerWithLayout() {
  const navigate = useNavigate();

  const [selectedCheckInDate, setSelectedCheckInDate] = useState(null);
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [paymentData, setPaymentData] = useState({});



  const handleConfirmOrder = () => {
    console.log("Order confirmed");
  };

  useEffect(() => {
    const fetchBookingDetails = async () => {
      const docRef = doc(db, "bookings", "booking-id");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setBookingDetails(data);

        
      const totalAmount = bookingDetails?.price || 0; 
      setPaymentData((prevData) => ({ ...prevData, amount: totalAmount }));
        

      } else {
        console.log("No such document!");
      }

    };

    fetchBookingDetails();
  }, []);


  const handleClick = () => {
    navigate('/Gallery')
  }

  const initialOptions = {
    "client-id": "AeAoUdddVyuyGm9-_loMbx_L7GNzHcRsRFu1KUu-LDzzs81FvBCOmoUi465med8ooCu5I_cbetOdeZV6",
    currency: "USD",
    intent: "capture"

  }


  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: paymentData.amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert("Transaction completed by" + details.payer.name.given_name);
    });
  };

  return (


    <>
      <RoomNavbar />

      <br />
      <br />
      <br />

      <div className="calendar-container">
        <div className="search-box">
          <div className="search-item">Filter Room</div>
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
          <div>
            <button className="search-item" onClick={handleClick}  >Change Room</button>
          </div>
        </div>

      </div>


      <div>

        <br />
        <br />
        {bookingDetails && (
          <div className="summary">
            <h4>Booking Summary</h4>
            <p><strong>Room:</strong> {bookingDetails.roomType}</p>
            <p><strong>Price:</strong> {bookingDetails.price}</p>
            <p><strong>Check-In Date:</strong> {selectedCheckInDate ? selectedCheckInDate.toDateString() : "Not selected"}</p>
            <p><strong>Check-Out Date:</strong> {selectedCheckOutDate ? selectedCheckOutDate.toDateString() : "Not selected"}</p>

            <div className="modal-container">

            <div className="icons-container">
        <OrderConfirmed order={bookingDetails} />
        <CancelOutlined
          size={40}
          onClick={handleConfirmOrder}
          className="cancel"
        />
             </div>

            <PayPalScriptProvider options={initialOptions}  >
              
              <PayPalButtons
               createOrder={(data,actions)=> createOrder(data,actions)}
              onApprove={(data,actions) => onApprove(data,actions)}
              />
            </PayPalScriptProvider>


            </div>
          </div>
        )}
      </div>



      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <div className="section">
        <h3></h3>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <p>920 Zane Isle, Lebsackfurt, 38755</p>
              <p>(207) 555-0136</p>
              <a href="mailto:jaro@example.com">jaro@gmail.com</a>
            </div>
            <div className="footer-socials">
              <a href="#" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f">Facebook</i></a>
              <a href="#" target="_blank" aria-label="Instagram"><i className="fab fa-instagram">Instagram</i></a>
            </div>
          </div>
        </footer>
      </div>





    </>
  );
};

export default DatePickerWithLayout;
