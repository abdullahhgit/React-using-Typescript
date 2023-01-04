
// Login and Logout functionality for frontend using Redux-Recat.js

import React from 'react';
import './App.css';
// import {Person, Country} from './components/Person';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
//import Country from './components/Person';
// import {useState} from 'react';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
 // const [name, setName] = useState<string>("");   //  tells that which data type state should accepted.
 /*   const getAge = (anyNumber: number):number => {  //  tells that which data type the function returns.
      return 99;
    }   */

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </Router>
      </Provider>

    {/* <div>
        <Person
          name="Pedro"
          email="abdul@gmail.com"
          age={21}
          isMarried={true}
          friends={["sami", "saad", "sufi"]}
          country = {Country.Pakistan}
        />
  </div>  */}

    </div>
  );
}

export default App;
