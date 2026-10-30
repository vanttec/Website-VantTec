import { useRef } from 'react';
import { motion, MotionConfig, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Barco from '../../assets/Barco.jpeg';
import TecLogo from '../../assets/tecLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contactEmail, socialLinks } from '../../constants';
import { fadeIn, staggerContainer } from '../../utils/motion';

const mailtoHref = `mailto:${contactEmail}?subject=Contacto%20VantTec&body=¡Hola!%20Les%20escribo%20porque%20estoy%20interesado%20en%20conocer%20más%20sobre%20VantTec%20y%20sus%20proyectos.%20Quedo%20en%20espera%20de%20su%20respuesta.`;

const item = fadeIn('up', 'tween', 0, 0.8);

// fadeFrom: solid color the top edge melts out of — match it to the bottom of the section above
const ContactUs = ({ fadeFrom = '#010521' }) => {
    const sectionRef = useRef(null);
    const reduceMotion = useReducedMotion();

    // Background photo settles from a slight zoom as the section scrolls into view
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'start start'] });
    const bgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.15, 1]);

    return (
        <MotionConfig reducedMotion="user">
            {/* The section drives the reveal: children start offset and would be clipped by
                overflow-hidden, so they can't reliably trigger whileInView themselves */}
            <motion.section
                ref={sectionRef}
                id="contactus"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between"
            >
                {/* Background photo */}
                <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center will-change-transform"
                    style={{ backgroundImage: `url(${Barco})`, scale: bgScale }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-0" />

                {/* Top fade — blends this section into the one above it */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-40 md:h-64 z-0 pointer-events-none"
                    style={{ backgroundImage: `linear-gradient(to bottom, ${fadeFrom}, transparent)` }}
                />

                {/* Center content */}
                <motion.div
                    variants={staggerContainer(0.15, 0.1)}
                    className="relative z-10 flex flex-col items-center justify-center flex-1 pt-24 pb-12 px-6"
                >

                    {/* Subtitle */}
                    <motion.p variants={item} className="text-white tracking-widest text-xs md:text-sm uppercase mb-4 font-urbanist text-center">
                        Navigate the future with us
                    </motion.p>

                    {/* Main title */}
                    <motion.h1 variants={item} className="text-white text-4xl md:text-7xl font-black uppercase font-montserrat text-center">
                        Reach Out
                    </motion.h1>

                    {/* Anytime */}
                    <motion.p variants={item} className="text-white text-xl md:text-2xl font-light mb-6 font-montserrat text-center">
                        anytime
                    </motion.p>

                    {/* Reach Out button — opens email app with pre-filled address */}
                    <motion.a
                        variants={item}
                        href={mailtoHref}
                        className="
                            bg-white text-black
                            font-montserrat font-bold
                            text-base tracking-wide
                            px-10 py-4
                            rounded-full
                            border-2 border-transparent
                            transition-colors duration-300
                            hover:bg-black hover:text-white hover:border-2 hover:border-white
                        "
                    >
                        Get in Touch &rarr;
                    </motion.a>
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.6, 0.8)}
                    className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-10 py-8 text-white"
                >

                    {/* Address */}
                    <div className="text-sm font-urbanist text-center md:text-left">
                        <p className="font-bold text-base mb-1">Address</p>
                        <p>México, Nuevo León, Monterrey,</p>
                        <p>Instituto Tecnológico de Estudios Superiores</p>
                        <p>Av. Eugenio Garza Sada 2501 Sur,</p>
                        <p>Tecnológico, 64700</p>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center gap-3">
                        <p className="font-bold text-sm font-urbanist">Social Media</p>
                        <div className="flex flex-row gap-4">
                            {socialLinks.map(({ name, href, icon }) => (
                                <a key={name} href={href} target='_blank' rel='noopener noreferrer' aria-label={`VantTec on ${name}`}>
                                    <FontAwesomeIcon icon={icon} size='2x' className="text-white hover:text-gray-300 hover:-translate-y-0.5 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Tec Logo */}
                    <img src={TecLogo} alt="Tec de Monterrey" className="h-12 md:h-16" />
                </motion.div>
            </motion.section>
        </MotionConfig>
    );
};

export default ContactUs;
