import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

/* Basic Styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* Navbar Component */
const Navbar = () =>
  <div>
    <NavLink
      to="/home"
      exact style={link}
      activeStyle={{ background: 'darkblue' }}>
      Home
    </NavLink>

    <NavLink
      to="/login"
      exact style={link}
      activeStyle={{ background: 'darkblue' }}>
      Login
    </NavLink>

 </div>


const Home = () => <h1>Home!</h1>

const About = () => <h1>This is my about component!</h1>

const Login = () =>
  <form>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>

    <div>
      <input type="password" name="password" placeholder="password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login" />
  </form>

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
)
