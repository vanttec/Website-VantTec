import { motion } from "framer-motion";
import { styles } from "../../styles";
import { arrow, videoBG } from '../../assets'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.90,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <video src={videoBG} autoPlay loop muted className="absolute w-full h-full object-cover" />
      <div className="absolute w-full h-full top-0 left-0 bg-[#000000cc]"></div>
      <div className={`absolute inset-0 m-auto flex flex-col items-center justify-center`}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Vant<span className="text-[#345ba3]">TEC</span></h1>
          <TypeAnimation
      sequence={[
        'The Future of Technology',
        1000,
        'The Future of Mobility',
        1000,
        'The Future of Innovation',
        1000,
        'The Future of Research',
        1000,
        'Navigating the Future',
        1000
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={0}
      className={`${styles.heroSubText} mt-2 text-white`}
    />
      </div>
      <motion.div 
        className='absolute xs:bottom-10 bottom-32 w-full flex 
        justify-center items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 13, duration: 1 }}
      >
        <a onClick={scrollToSection}>
          <div className='w-[48px] h-[48px] rounded-[10px] 
          bg-gradient-to-r from-blue-500 via-indigo-500 
          to-cyan-500 flex justify-center items-start p-[2px] 
          hover:shadow-lg hover:shadow-purple-600/30'>
            <div className='flex h-full w-full items-center 
            justify-center rounded-[10px] bg-primary'>
              <motion.div 
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "loop",
                }}
              >
                <img src={arrow} alt="Flecha hacia abajo" 
                className=""/>
              </motion.div>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero