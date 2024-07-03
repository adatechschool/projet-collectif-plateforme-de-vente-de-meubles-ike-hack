import React from 'react';
import logo from '../assets/logo.svg';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">Iké'hack</h2>
                    <img id="logo" src={logo} alt="Logo" />
                    <div className="contact">
                         <h4>Service client </h4>
                        <span><i className="fas fa-phone"></i> &#9743; 12 34 56 78 </span>
                        <span><i className="fas fa-envelope"></i> &#9993; info@Iké'hack.com</span>
                    </div>
                </div>
                <div className="footer-section socials">
                    <h2>Suivez-Nous</h2>
                    <a href="#"><FaFacebook /> Facebook</a>
                    <a href="#"><FaTwitter /> Twitter</a>
                    <a href="#"><FaInstagram /> Instagram</a>
                    <a href="#"><FaTiktok /> Tiktok</a>
                    <a href="#"><FaLinkedin /> LinkedIn</a>
                </div>
                <div className="footer-section links">
                    <h2 className="propos">A propos</h2>
                    <ul>
                        <li><a href="#">Qui nous sommes</a></li>
                        <li><a href="#">Conditions générales</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Plan du site</a></li>
                        <li><a href="#">Paiement sécurisé</a></li>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contactez Nous</h2>
                    <form action="#" method="post">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Votre adresse mail..." />
                        <textarea name="message" className="text-input contact-input" placeholder="Votre message..."></textarea>
                        <button type="submit" className="btn btn-big">
                            <i className="fas fa-envelope"></i>
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; Tous droits réservés, 2024 Iké'hack | Conçu parles développeuses et les développeurs de Iké'hack.
            </div>
        </footer>
    );
};

export default Footer;
