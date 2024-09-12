import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room2.jpg";
import { useNavigate } from "react-router-dom";


import './Accommodation.css';


const Accomodation = () => {
  const navigate = useNavigate();



  const handleBook = () =>{
    navigate ('/Droom')
}

const handleDroom = () =>{
  navigate ('/Droom')

}

  return (


    <div className="landing-page">
      <div className="image-container">
        <img src={Room2} alt="Landing" className="landing-image" />

        <h3>A BREATH OF FRESH AIR AND COMFORT</h3>
        <p>Each of our bright, light-flooded rooms come with everything you could possibly       </p>
        <p> need for a comfortable stay.</p>

        <div className="row">
          <div className="column"> TWIN SINGLE ROOM
            <img src={Room1} alt="Landing" className="landing-image" />
            <button className="book-now-btn" onClick={handleBook}  >BOOK NOW</button>

          </div>

          <div className="column"> DOUBLE BEDROOM
            <img src={Room2} alt="Landing" className="landing-image" />
          <button className="book-now-btn" onClick={handleDroom}  >BOOK NOW</button>

          </div>

        </div>
        <br />
        <div className="section">
          <h3>APARTMENTS</h3>

        </div>

        <div className="room-card">

          <div class="room-image-container">
            <img src={Room2} alt="Landing" className="landing-image" />
            <div className="room-title">ONE BEDROOM1</div>
          </div>
          <button className="book-now-btn">BOOK NOW</button>
        </div>

        <div className="room-card">
          <div className="room-image-container">
            <img src={Room1} alt="One Bedroom" className="room-image" />
            <div className="room-title">ONE BEDROOM</div>   

          </div>
          <button className="book-now-btn">BOOK NOW</button>
        </div>

        <div className="room-card">
          <div className="room-image-container">
            <img src={Room1} alt="One Bedroom" className="room-image" />
            <div className="room-title">ONE BEDROOM</div>
          </div>
          <button className="book-now-btn">BOOK NOW</button>
        </div>



      </div>


    </div>




  );
};

export default Accomodation;
