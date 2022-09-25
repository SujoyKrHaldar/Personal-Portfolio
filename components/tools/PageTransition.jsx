import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function PageTransition({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
