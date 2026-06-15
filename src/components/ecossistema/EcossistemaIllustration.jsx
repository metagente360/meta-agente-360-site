import { motion } from 'framer-motion';

export default function EcossistemaIllustration() {
  return (
    <motion.div
      className="relative w-full flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src="https://media.base44.com/images/public/6a3057094f64de9f1f72d897/e35cbff0c_ecossistema.png"
        alt="Ecossistema Meta Agente 360"
        className="w-full h-auto object-contain"
        style={{ mixBlendMode: 'multiply' }}
      />
    </motion.div>
  );
}