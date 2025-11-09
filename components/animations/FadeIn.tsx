"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  yOffset = 20,
  duration = 0.5,
  as = "div",
  ...props
}) => {
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
        duration,
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;

