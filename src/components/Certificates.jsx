import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({ index, image, url }) => {
  const openURL = () => {
    window.open(url);
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full h-full"
    >
      <div className="mt-1">
        <img
          src={image}
          alt="certificate_image"
          className="w-full h-full object-cover rounded-2xl hover:cursor-pointer"
          onClick={openURL}
        />
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>A few of my +35...</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.name}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");
