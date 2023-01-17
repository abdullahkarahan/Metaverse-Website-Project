'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (

  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 left-[18%] w-[220px] h-[170px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="/card-01.png" alt="card" className="w-full h-full" />
          <div className="absolute bottom-0 p-6 flex flex-col items-center gap-3">
            <div className="flex justify-around items-center gap-8">
              <img
                src="/people-04.png"
                alt="people"
                className="w-[26px] h-[26px]"
              />
              <span className="font-normal text-[12px] leading-[20px] text-white ">
                +264 has joined
              </span>
            </div>
            <p className="font-bold text-[18px] leading-[10px] text-white">
              The Upside Down
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-[18%] w-[220px] h-[170px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="/card-02.png" alt="card" className="w-full h-full" />
          <div className="absolute bottom-0 p-6 flex flex-col items-center gap-3">
            <div className="flex justify-around items-center gap-6">
              <img
                src="/people-05.png"
                alt="people"
                className="w-[26px] h-[26px]"
              />
              <span className="font-normal text-[12px] leading-[20px] text-white ">
                +312 has joined
              </span>
            </div>
            <p className="font-bold text-[18px] leading-[10px] text-white">
              Hawkins Labs
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default World;
