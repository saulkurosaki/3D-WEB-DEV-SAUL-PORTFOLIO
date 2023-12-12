import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";

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

export default CertificateCard;
