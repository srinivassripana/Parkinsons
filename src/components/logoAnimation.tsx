import { motion } from "framer-motion";
import { useState } from "react";

export default function ParkinsonsLogo() {
  const [moveToCorner, setMoveToCorner] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white relative">
      <motion.img
        src="/logo.jpeg" // Ensure the image is in the public folder
        alt="Parkinson's Disease Logo"
        className="w-60 h-60 rounded-full absolute"
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        animate={
          moveToCorner
            ? { x: "-45vw", y: "-40vh", scale: 0.3, opacity: 1 } // More to the left
            : { opacity: 1, y: [0, -30, 0, -15, 0], scale: 1 }
        }
        transition={{
          duration: moveToCorner ? 2 : 2.5, // Smooth transitions
          ease: "easeInOut",
        }}
        onAnimationComplete={() => setMoveToCorner(true)} // Triggers move to the corner
      />
    </div>
  );
}
