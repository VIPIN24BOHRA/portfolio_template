import { motion } from "framer-motion";

function SkillImgAnimate({ children, delay }: { children: any; delay: any }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 1.2,
        type: "spring",
        bounce: 0.8,
        delay: delay,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 50, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default SkillImgAnimate;
