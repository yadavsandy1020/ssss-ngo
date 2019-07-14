import React from 'react'
import Slider from './Slider'
import '../App.css'
import Cards from './Card';
const Home = () => {



    return (
        <div >
            <div className="row">
                <div className="col-sm-3">
                    
                </div>
                <div className="col-sm-6">
                    <h4 className="text-center">
                        Recent Events
                    </h4>
                </div>
                <div className="col-sm-3">
               
                </div>
            </div>

            <div className="row">
                <div className="col-md-1">
                
                </div>
                <div className="col-md-7">
                    <Slider />
                </div>
                <div className="col-md-4">
                <Cards/>
                </div>
            </div>



        </div>
    )
}

export default Home;