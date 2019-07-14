import React from 'react'
import logo from '../images/1.jpg'
const KeyPeople = () => {
    return (
        <div>
            <div class="row">
                <div class="col s3 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src={logo} alt="images" width="100" height="300" />
                            <span class="card-title">Vivek Yadav</span>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
                <div class="col s3 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src={logo} alt="images" width="100" height="300" />
                            <span class="card-title">Vivek Yadav</span>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyPeople