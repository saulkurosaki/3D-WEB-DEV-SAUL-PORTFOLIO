import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { fadeIn } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  url,
}) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          className="relative w-full h-[230px] cursor-pointer rounded-2xl"
          onClick={() => window.open(url, "_blank")}
          onMouseOver={() => setActive(true)}
          onMouseOut={() => setActive(false)}
        >
          <div>
            <img
              src={image}
              alt="project_image"
              className={`${
                active && "opacity-50"
              } w-full h-full object-cover rounded-2xl`}
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-between items-center">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}

          <div className="inset-0 flex justify-end card-img_hover h-8 w-8 rounded-full">
            <div
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
