import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import TecLogo from '../assets/tecLogo.png'; // adjust filename

const Footer = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center"
        >
            <div className="bg-black/80 flex flex-row justify-between items-center px-10 py-8 text-white">
                {/* Address */}
                <div className="text-sm">
                    <p className="font-bold text-base mb-1">Address</p>
                    <p>México, Nuevo León, Monterrey, Instituto</p>
                    <p>Tecnológico de Estudios Superiores</p>
                    <p>Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64700</p>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center gap-3">
                    <p className="font-bold text-sm">Social Media</p>
                    <div className="flex flex-row gap-4">
                        <a href='https://www.facebook.com/VantTec' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faFacebook} size='2x' />
                        </a>
                        <a href='https://www.youtube.com/@vanttecmty' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faYoutube} size='2x' />
                        </a>
                        <a href='https://github.com/vanttec' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} size='2x' />
                        </a>
                        <a href='https://www.instagram.com/vanttec/' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} size='2x' />
                        </a>
                        <a href='https://twitter.com/vantTECmx' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faTwitter} size='2x' />
                        </a>
                    </div>
                </div>

                {/* Tec Logo */}
                <img src={TecLogo} alt="Tec de Monterrey" className="h-16" />
            </div>
        </section>
    );
};

export default Footer;