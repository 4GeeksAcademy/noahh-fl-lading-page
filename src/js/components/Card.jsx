import React from "react";

const Card = ({ details }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img src={details.img} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt={details.title} />
            <div className="card-body">
                <h5 className="card-title">{details.title}</h5>
                <p className="card-text">{details.desc}</p>
                <hr style={{ border: 'none', height: '1px', backgroundColor: '#555', marginBottom: '15px' }} />
                <button className="btn btn-outline-dark">Learn More</button>
            </div>
        </div>
    );
};

export default Card;
