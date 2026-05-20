import React from 'react';
import Forms from '../shared/Forms';
import Barco from '../../assets/Barco.jpeg';
import TecLogo from '../../assets/tecLogo.png'; // adjust filename
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    return (
        <section
            id="contactus"
            className="relative w-full min-h-[120vh] bg-cover bg-center flex flex-col justify-between"
            style={{ backgroundImage: `url(${Barco})`, backgroundPosition: 'center 60%', backgroundRepeat: 'no-repeat' }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 pt-40 pb-32">
                <p className="text-white tracking-widest text-sm uppercase mb-4 font-urbanist">
                    Navigate the future with us
                </p>
                <h1 className="text-white text-7xl font-black uppercase font-montserrat">
                    Reach Out
                </h1>
                <p className="text-white text-2xl font-light mb-10 font-montserrat">
                    anytime
                </p>
                <Forms />
            </div>

            {/* Bottom bar — sits on top of the same background */}
            <div className="relative z-10 flex flex-row justify-between items-center px-10 py-8 text-white">
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
                            <FontAwesomeIcon icon={faFacebook} size='2x' className="text-white hover:text-gray-300" />
                        </a>
                        <a href='https://www.youtube.com/@vanttecmty' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faYoutube} size='2x' className="text-white hover:text-gray-300" />
                        </a>
                        <a href='https://github.com/vanttec' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} size='2x' className="text-white hover:text-gray-300" />
                        </a>
                        <a href='https://www.instagram.com/vanttec/' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} size='2x' className="text-white hover:text-gray-300" />
                        </a>
                        <a href='https://twitter.com/vantTECmx' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faTwitter} size='2x' className="text-white hover:text-gray-300" />
                        </a>
                    </div>
                </div>

                {/* Tec Logo */}
                <img src={TecLogo} alt="Tec de Monterrey" className="h-16" />
            </div>
        </section>
    );
};

export default ContactUs;