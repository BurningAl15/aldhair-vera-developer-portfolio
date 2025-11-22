import React from "react";
import LazyMotion from "../utils/LazyMotion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <LazyMotion
            type="div"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    {!!preview_project_link && preview_project_link !== "" && (
                        <div
                            onClick={() => window.open(preview_project_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={preview}
                                alt="Preview"
                                loading="lazy"
                                decoding="async"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    )}

                    {!!source_code_link && source_code_link !== "" && (
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div
                                onClick={() => window.open(source_code_link, "_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <img
                                    src={github}
                                    alt="github"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={`${name}-${tag.name}`}
                            className="text-[14px] text-secondary"
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="w-full">
            <LazyMotion
                type="div"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="mt-20"
            >
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <LazyMotion
                type="div"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Following projects showcases my skills and experience through real-world
                examples of my work. Each project is briefly described with links to code
                repositories and live demos. It reflects my ability to solve complex
                problems, work with different technologies, and manage projects
                effectively.
            </motion.div>

            <LazyMotion
                type="div"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="mt-20 flex flex-wrap gap-7"
            >
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Projects, "projects"); 