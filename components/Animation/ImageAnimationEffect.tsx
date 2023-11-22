import { motion } from "framer-motion";

function ImageAnimationEffect({
  children,
  delay,
}: {
  children: any;
  delay: any;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        ease: [0.17, 0.67, 0.83, 0.91],
        delay: delay,
      }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: 25, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default ImageAnimationEffect;
