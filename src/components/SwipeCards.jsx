import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { testimonials } from '../constants';
import { styles } from '../styles';
import { vanttec, arrow } from '../assets';

const TestimonialCard = ({ id, name, role, text, img, cards, setCards }) => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const isFront = id === cards[cards.length - 1].id

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  })

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50){
      setCards(prev => prev.filter(v => v.id !== id));
    }
  };

  return (
    <motion.div 
      className="w-[300px] h-[450px] p-[1.5px] rounded-lg bg-gradient-to-r 
      from-blue-500 via-indigo-500 to-cyan-500 shadow-card"
      whileDrag={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{gridRow: 1, 
        gridColumn: 1, 
        x, 
        opacity, 
        rotate, 
        transition: "0.125s transform",
        boxShadow: isFront ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb (0 0 0 / 0.5)" : undefined,
      
      }}
      animate={{scale: isFront ? 1: 0.98,}}
      onDragEnd={handleDragEnd}
    >
      <div className="bg-gray-600 rounded-lg p-6 shadow-md flex flex-col items-center hover:cursor-grab origin-bottom active:cursor-grabbing w-full h-full">
        <img src={img} alt={name} className="w-32 h-32 object-cover 
        rounded-full border border-gray-300" />
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">{name}</h2>
          <h3 className="text-base text-blue-800">{role}</h3>
          <p className="mt-4 text-black">"{text}"</p>
        </div>
      </div>
    </motion.div>
  );
};

const SwipeCards = () => {
  const [cards, setCards] = useState(testimonials);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <img src={vanttec} className="absolute w-full h-full object-cover" />
      <div className="absolute w-full h-full top-0 left-0 bg-[#000000cc]"></div>
      <div className={`absolute inset-0 top-[120px] max-w-7xl 
        mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex-1 mt-20">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Vant<span className="text-[#345ba3]">TEC</span>, 
            About Us
          </h1>
          <p className={`${styles.heroSubText} mt-2 
          text-white`}>
            VantTEC is a leading innovator in the tech industry, 
            committed to creating innovative solutions that 
            enhance the lives of our customers.
          </p>
        </div>
        <div className="flex-1 mt-20 grid place-items-center">
          {cards.map((testimonial) => (
            <TestimonialCard key={testimonial.id} cards={cards}
            setCards={setCards} {...testimonial} />
          ))}
        </div>
        <motion.div 
          className='absolute xs:bottom-10 bottom-32 w-full flex 
          justify-center items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}>
          <a href='#vision'>
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
                  }}>
                  <img src={arrow} alt="Flecha hacia abajo" 
                  className=""/>
                </motion.div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SwipeCards;