import React from "react";
import './Home.css'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
const Home = () => {
  return (
  
  <div className="homepage">
    <>
    <Navbar/>
    </>
    <Header/>
    <SpecialityMenu/>
    <TopDoctors/>
    </div>
)
};

export default Home;
