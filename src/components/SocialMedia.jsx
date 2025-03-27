import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { socialMedias } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SocialMediaCard = ({ index, image, url, title }) => (
  <>
    <Tilt
      className='xs:w-[180px] w-full group relative'
      data-tooltip-target={`tooltip-${title}`}
      data-tooltip-trigger="hover"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
        onClick={() => window.open(url, "_blank")}
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col'
        >
          <img
            src={image}
            alt='web-development'
            className='w-24 h-24 object-contain'
          />
        </div>
      </motion.div>
      <span className="absolute hidden group-hover:flex -left-1 -top-2 -translate-y-full w-48 px-2 py-2 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700 custom-tooltip">
        {title}
      </span>
    </Tilt>
  </>
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
            <SocialMediaCard key={sm.id} index={index} image={sm.image} url={sm.url} title={sm.title} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(SocialMedia, "");
