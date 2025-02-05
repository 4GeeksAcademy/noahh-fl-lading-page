import React from 'react';
import ReactDOM from 'react-dom/client';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";  

// Components
import Home from "./Home.jsx";  
import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
