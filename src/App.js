import './styles/App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages';
import './styles/default.css'
import HungryHomies from './pages/hungryhomies';
import About from './pages/about';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/hungryhomies' element={<HungryHomies/>}/>
        </Routes>
      </Router>
    );
  }
}
export default App;
