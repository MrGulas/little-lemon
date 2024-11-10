import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/booking" element={<BookingPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
