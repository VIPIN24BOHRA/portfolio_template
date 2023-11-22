import { motion } from "framer-motion";

function SocailLinkEffect({ children, delay }: { children: any; delay: any }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        type: "spring",
        bounce: 0.8,
        delay: delay,
      }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -25, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default SocailLinkEffect;
