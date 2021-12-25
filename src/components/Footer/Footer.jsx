import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
                <div className="footer">
                    <span>yummy-express.com</span>
                    <span>All rights reserved 2021</span>
                    <span>+7 999 900 99 00</span>
                </div>

        </footer>
    );
};

export default Footer;
