import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Footer.css';

const Footer = () => { 
    return (
        <div className="footer">
        <h4> Galería de imágenes de integrantes de Robotech</h4>
        <button type="button" class="btn btn-danger">Mas info</button>
        </div>
    )
}

export default Footer;