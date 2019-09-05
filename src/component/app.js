import React from 'react';
import { Route } from 'react-router-dom'
import Home from './home/index'
import Products from './products'
import Header from './header'
import Footer from './footer'
import './App.scss'
const App = () => (
  <div className="appWraper">
   <Header/>

    <main className="mainBoby">
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Products} />
    </main>
    <Footer/>
  </div>
)
export default App;
