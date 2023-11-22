import { motion } from "framer-motion";

function AnimationEffect({
  children,
  delay,
  duration,
  y,
}: {
  children: any;
  delay: any;
  duration: number;
  y: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        // ease: [0.17, 0.67, 0.83, 0.91],
        delay: delay,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: y, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationEffect;
