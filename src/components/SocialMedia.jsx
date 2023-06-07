import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { socialMedias } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SocialMediaCard = ({ index, image, url }) => (
  <Tilt className='xs:w-[180px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
      onClick={() => window.open(url, "_blank")}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={image}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
      </div>
    </motion.div>
  </Tilt>
)

const SocialMedia = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Social Medias to</p>
        <h2 className={styles.sectionHeadText}>Find me.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {
          socialMedias.map((sm, index) => (
            <SocialMediaCard key={sm.id} index={index} image={sm.image} url={sm.url} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(SocialMedia, "");
