import React, { useState } from "react";
import "components/Navbar.css";
import { IoReorderThreeSharp } from "react-icons/io5";
import { GiStreetLight } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { SiGoogleearth } from "react-icons/si";
import { GrMapLocation } from "react-icons/gr";


import { FaMapMarkedAlt } from "react-icons/fa";
import {useNavigate} from "react-router-dom";



export default function Navbar() {

    const [active, setActive] = useState(false)

    const showNav = () => {
        setActive(!active)
    }


   
    const navigate = useNavigate()

    const handlelogout = () => {
       navigate("../")
    }

    const handlemap = () => {
        navigate("/Maps")
    }

    const handlehome = () => {
        navigate("/Dashboardhome")
    }


    return(
        <>
        <section className="top-navbar-section">
        <header className="header">
            <div onClick={handlehome} className="natmlogo">
            <img className="navtmlogo" src="/home/shrey/Desktop/slapp/public/tinymeshimg.png" alt="logo" />  
            </div>
            <div className="top-navbar-middle-heading">
                <h2 className="nav-head">Street Light Management</h2>
            </div>

            

            <div className="top-navbar-right1">
            <GrMapLocation onClick={handlemap} className="map-icon"/>

            {/* <Popup    
            trigger={<div className="nav-map-div">
           <GrMapLocation onClick={handlemap} className="map-icon"/>
            </div>}
            position="bottom"
            on={['hover','focus']}
            arrow
            >
            <div  className="popup-icon">Map</div> 
            </Popup> */}
            <button  className="submit-btn" >
             <GiStreetLight className="icon2"/>  Light Control</button>
            <button  className="submit-btn" onClick={handlelogout}>
               <IoIosLogOut className="icon2"/>  Logout</button>
            </div>
            { active && (
            <div className="top-navbar-right">
            <button  className="submit-btn" > 
            <GiStreetLight className="icon3"/> Light Control</button>
            <button  className="submit-btn" onClick={handlelogout}> 
            <IoIosLogOut className="icon3"/> Logout</button>

            </div>
           )} 
            <div onClick={showNav} className="toggleNavbar">
            <IoReorderThreeSharp className="icon" />
            </div>
            </header>
        </section>
        </>
    )
}

