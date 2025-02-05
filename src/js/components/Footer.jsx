import React from "react";

const Footer = () => {
    return (
        <footer className="bg-secondary text-white text-center py-3">
            <div className="container">
                <p><small>Copyright @ Your Website &copy; {new Date().getFullYear()} </small></p>
            </div>
        </footer>
    );
};

export default Footer;
