import React from "react";
import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

const cardData = [
    { img: "https://picsum.photos/200/300?random=1", title: "Lake View", desc: "Beautiful lake surrounded by mountains." },
    { img: "https://picsum.photos/200/300?random=2", title: "Cityscape", desc: "Vibrant city life at night." },
    { img: "https://picsum.photos/200/300?random=3", title: "Desert", desc: "A peaceful desert with golden dunes." },
    { img: "https://picsum.photos/200/300?random=4", title: "Beach", desc: "Relaxing beach with palm trees." }
];

const Home = () => {
    return (
        <div className="text-center">
            <Navbar />
            <Jumbotron />
            <div className="container">
                <div className="row">
                    {cardData.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <Card details={item} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
