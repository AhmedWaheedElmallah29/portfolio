import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: (direction) => {
    const offsets = {
      up: { opacity: 0, y: 40 },
      down: { opacity: 0, y: -40 },
      left: { opacity: 0, x: -40 },
      right: { opacity: 0, x: 40 },
      none: { opacity: 0 },
    };
    return offsets[direction] || offsets.up;
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      custom={direction}
      variants={defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
