import React from 'react';
import { Route } from 'react-router-dom'
import Home from './home/index'
import About from './about'
import Header from './header'
import Footer from './footer'
import './App.css'
const App = () => (
  <div className="appWraper">
   <Header/>

    <main className="mainBoby">
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={About} />
    </main>
    <Footer/>
  </div>
)
export default App;
