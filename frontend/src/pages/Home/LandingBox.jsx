import { motion } from "framer-motion";
import ListLink from "../../components/ListLink";

function LandingBox() {
  return (
    <div className="landingBox">
      <motion.div 
        className="landingBox__square"
        initial="visible"
        animate={{
          transform: { translateX: 0.6 },
          transition: { duration: 0.5 },
        }}
        exit={{ width: "-100%", transition: { duration: 0.6 } }}
      >
        <h1 className="landingBox__title">
          <span>L'art du</span>
          <span className="landingBox__title__big">Cocktail</span>
        </h1>
        <ListLink />
      </motion.div>
    </div>
  );
}

export default LandingBox;
