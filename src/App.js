import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Volunteer from './components/Volunteer'
import Contact from './components/Contact'
import MyGallery from './components/Gallery'
import News from './components/News'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
          <Switch>
            <Route path = '/volunteer' component = {Volunteer}></Route>
            <Route path = '/contact' component = {Contact}></Route>
            <Route path = '/gallery' component = {MyGallery}></Route>
            <Route path = '/news' component = {News}></Route>
          </Switch>
          <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
