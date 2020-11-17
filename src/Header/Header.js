import React from 'react'
import './header.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Main from '../Main/Main'
import Prices from '../Prices/Prices'
import Praktik from '../Praktik/Praktik'
import Practice from '../Praktik/Praktik'



const Header = () => {
  return (
    <Router>
      <header className="App-header">
        <Link className="active" to="/home"><div className="wrapper_1">
          <h5> Головна</h5>
        </div></Link>
        <Link className="active" to="/practice"><div className="wrapper_2">
          <h5>Практика</h5>
        </div></Link>
        {/* <Link className="active" to="/services"><div className="wrapper_3"><h5>Послуги</h5></div></Link> */}
        <Link className="active" to="/prices"><div className="wrapper_4">
          <h5>Послуги та Ціни</h5>
        </div></Link>
      </header>
      <Switch>
        <Route path="/home" component={Main} />
        <Route path="/practice" component={Practice} />
        <Route path="/prices" component={Prices} />
      </Switch>
    </Router>
  )
}
export default Header