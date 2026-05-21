import Barco from '../../assets/Barco.jpeg';
import TecLogo from '../../assets/tecLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
const ContactUs = () => {
    return (
        <section
            id="contactus"
            className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-between"
            style={{ backgroundImage: `url(${Barco})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 pt-24 pb-12">
                
                {/* Subtitle */}
                <p className="text-white tracking-widest text-sm uppercase mb-4 font-urbanist">
                    Navigate the future with us
                </p>

                {/* Main title */}
                <h1 className="text-white text-7xl font-black uppercase font-montserrat">
                    Reach Out
                </h1>

                {/* Anytime */}
                <p className="text-white text-2xl font-light mb-6 font-montserrat">
                    anytime
                </p>

                {/* Reach Out button — opens email app with pre-filled address */}
                <a  
                    href="mailto:vanttec@servicios.tec.mx?subject=Contacto%20VantTec&body=¡Hola!%20Les%20escribo%20porque%20estoy%20interesado%20en%20conocer%20más%20sobre%20VantTec%20y%20sus%20proyectos.%20Quedo%20en%20espera%20de%20su%20respuesta."
                    className="
                        bg-white text-black 
                        font-montserrat font-bold 
                        text-base tracking-wide
                        px-10 py-4 
                        rounded-full
                        border-2 border-transparent
                        transition-all duration-300 
                        hover:bg-black hover:text-white hover:border-2 hover:border-white
                    "
                >
                    Get in Touch &rarr;
                </a>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 flex flex-row justify-between items-center px-10 py-8 text-white">
                
                {/* Address */}
                <div className="text-sm font-urbanist">
                    <p className="font-bold text-base mb-1">Address</p>
                    <p>México, Nuevo León, Monterrey, Instituto</p>
                    <p>Tecnológico de Estudios Superiores</p>
                    <p>Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64700</p>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center gap-3">
                    <p className="font-bold text-sm font-urbanist">Social Media</p>
                    <div className="flex flex-row gap-4">
                        <a href='https://www.facebook.com/VantTec' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faFacebook} size='2x' className="text-white hover:text-gray-300 transition-colors duration-300" />
                        </a>
                        <a href='https://www.youtube.com/@vanttecmty' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faYoutube} size='2x' className="text-white hover:text-gray-300 transition-colors duration-300" />
                        </a>
                        <a href='https://github.com/vanttec' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} size='2x' className="text-white hover:text-gray-300 transition-colors duration-300" />
                        </a>
                        <a href='https://www.instagram.com/vanttec/' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} size='2x' className="text-white hover:text-gray-300 transition-colors duration-300" />
                        </a>
                        <a href='https://twitter.com/vantTECmx' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faXTwitter} size='2x' className="text-white hover:text-gray-300 transition-colors duration-300" />
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