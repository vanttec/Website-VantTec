import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TecLogo from '../assets/tecLogo.png'; // adjust filename
import { socialLinks } from '../constants';

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
                        {socialLinks.map(({ name, href, icon }) => (
                            <a key={name} href={href} target='_blank' rel='noopener noreferrer' aria-label={`VantTec on ${name}`}>
                                <FontAwesomeIcon icon={icon} size='2x' aria-hidden='true' />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Tec Logo */}
                <img src={TecLogo} alt="Tec de Monterrey" className="h-16" />
            </div>
        </section>
    );
};

export default Footer;
