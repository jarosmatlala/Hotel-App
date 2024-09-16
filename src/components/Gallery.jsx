import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room2.jpg";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import bchr from "../assets/images/bchr.jpg";
import './Accommodation.css';
import GalleryNav from "./GalleryNav";


const accomodation = () => {
    const navigate = useNavigate();

    const handleGarden = async () =>{
        const roomDetails = {
            roomType: "Garden View Room",
            price: "R300.00",
            userId: "unique-user-id",
          };
          
          await setDoc(doc(db, "bookings", "booking-id"), roomDetails);
          navigate('/Droom', { state: roomDetails });

      }



    return (

<>

<GalleryNav/>

        <div className="landing-page">
            <div className="image-container">

                <br />

                <div className="section">
                    <h3>BACHELOR</h3>

                </div>

                <div className="room-card">

                    <div className="room-image-container">
                        <img src={bchr} alt="Landing" className="landing-image" />
                        <div className="room-title">Garden View Room</div>
                    </div>
                    <button className="book-now-btn" onClick={handleGarden}  >VIEW</button>
                    <button className="book-now-btn"   >R300.00</button>

                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">Mountain View Room</div>
                    </div>
                    <button className="book-now-btn" onClick={handleGarden}  >VIEW</button>
                    <button className="book-now-btn"   >R300.00</button>


                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">Luxury Room</div>
                    </div>
                    <button className="book-now-btn" onClick={handleGarden}  >VIEW</button>
                    <button className="book-now-btn"   >R300.00</button>

                </div>

                <div className="section">
                    <h3>ONE AND HALF BEDROOM</h3>

                </div>

                <div className="room-card">

                    <div class="room-image-container">
                        <img src={Room2} alt="Landing" className="landing-image" />
                        <div className="room-title">Family Room</div>
                    </div>
                    <button className="book-now-btn" onClick={handleGarden}  >VIEW</button>
                    <button className="book-now-btn"   >R300.00</button>

                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">Accessible Room</div>
                    </div>
                    <button className="book-now-btn" onClick={handleGarden}  >VIEW</button>
                    <button className="book-now-btn"   >R300.00</button>

                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">Standard Room</div>
                    </div>
                    <button className="book-now-btn" onClick={handleGarden}  >VIEW</button>
                    <button className="book-now-btn"   >R300.00</button>

                </div>

                <div className="section">
                    <h3>DOUBLE BEDROOM</h3>

                </div>

                <div className="room-card">

                    <div class="room-image-container">
                        <img src={Room2} alt="Landing" className="landing-image" />
                        <div className="room-title">King Rooms</div>
                    </div>
                    <button className="book-now-btn" onClick={handleGarden}  >VIEW</button>
                    <button className="book-now-btn"   >R300.00</button>

                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">Presidential Suite</div>
                    </div>
                    <button className="book-now-btn" onClick={handleGarden}  >VIEW</button>
                    <button className="book-now-btn"   >R300.00</button>

                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">Garden View</div>
                    </div>
                    <button className="book-now-btn" onClick={handleGarden}  >VIEW</button>
                    <button className="book-now-btn"   >R300.00</button>

                </div>



            </div>


        </div>

        </>


    );
};

export default accomodation;
