import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-4 bg-light rounded-3 px-4 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-4 fw-bold">Welcome to Our Site!</h1>
                <p className="col-md-8 lead">
                    Discover beautiful places, amazing landscapes, and hidden gems from around the world.
                </p>
                <button className="btn btn-dark btn-lg">Explore Now</button>
            </div>
        </div>
    );
};

export default Jumbotron;
