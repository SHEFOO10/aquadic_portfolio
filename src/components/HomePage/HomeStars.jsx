import BigStar from "@/components/icons/home/BigStar.jsx";
import SmallStar from "@/components/icons/home/SmallStar.jsx";
import { motion } from "framer-motion";

const createFloatAndPulse = (delay) => ({
  animate: {
    y: [0, -5, 0],
    opacity: [0.8, 1, 0.8],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      },
      opacity: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      },
    },
  },
});

const HomeStars = () => {
  return (
    <div>
      <motion.span
        className="absolute -top-20 right-4"
        {...createFloatAndPulse(0)}
      >
        <BigStar />
      </motion.span>
      <motion.span
        className="absolute top-20 right-20"
        {...createFloatAndPulse(0.5)}
      >
        <SmallStar />
      </motion.span>
      <motion.span
        className="absolute top-32 left-20"
        {...createFloatAndPulse(1)}
      >
        <SmallStar />
      </motion.span>
      <motion.span
        className="absolute bottom-16 left-4"
        {...createFloatAndPulse(1.5)}
      >
        <BigStar />
      </motion.span>
    </div>
  );
};

export default HomeStars;
