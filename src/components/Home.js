import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MyGallery from './Gallery'
import  Volunteer from './Volunteer'
const Home = ()=>{
    return(
        <div className="container">
            <Navbar/>
           
           {/* <MyGallery/> */}
            <Volunteer/>
            <Footer/>
        </div>
    )
}

export default Home;