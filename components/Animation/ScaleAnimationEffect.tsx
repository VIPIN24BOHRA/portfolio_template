import { motion } from "framer-motion";

function ScaleAnimationEffect({
  children,
  delay,
  duration,
}: {
  children: any;
  delay: any;
  duration: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: duration,
        ease: "anticipate",
        delay: delay,
        repeat: 1,
        repeatType: "reverse",
      }}
      variants={{
        visible: {
          scale: 1.1,
        },
        hidden: { scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScaleAnimationEffect;
