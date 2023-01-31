import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = (props) => {
    return (
        <h1>{props.title}</h1>
    );
};

export default Header