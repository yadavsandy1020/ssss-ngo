import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Volunteer from './components/Volunteer'
import Contact from './components/Contact'
import MyGallery from './components/Gallery'
import News from './components/News'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Form from './components/Form';
import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import KeyPeople from './components/KeyPeople';
import Slider from './components/Slider';
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar />
        </header>


        <Switch>

          <Route exact path='/' component={Home}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route path='/volunteer' component={Volunteer}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/gallery' component={MyGallery}></Route>
          <Route path='/news' component={News}></Route>
          <Route path='/createVolunteer' component={Form}></Route>
          <Route path='/login' component={Login}></Route>
      
          
            
              <Route path='/keyPeople' component={KeyPeople}></Route>
            





        </Switch>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
