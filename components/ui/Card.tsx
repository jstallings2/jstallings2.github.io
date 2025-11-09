import React from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  tags?: string[];
  href?: string;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  tags,
  href,
  className = "",
  hoverable = true,
}) => {
  const cardContent = (
    <div
      className={`rounded-2xl border border-muted-dark bg-surface p-6 shadow-card transition-all duration-300 ${
        hoverable
          ? "hover:scale-[1.02] hover:border-accent hover:shadow-glow"
          : ""
      } ${className}`}
    >
      {title && (
        <h3 className="mb-2 text-xl font-semibold text-gray-100">{title}</h3>
      )}
      {subtitle && <p className="mb-3 text-sm text-muted">{subtitle}</p>}
      {children && <div className="text-gray-300">{children}</div>}
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={hoverable ? { scale: 1.02 } : {}}
        className="block"
      >
        {cardContent}
      </motion.a>
    );
  }

  return hoverable ? (
    <motion.div whileHover={{ scale: 1.02 }}>{cardContent}</motion.div>
  ) : (
    cardContent
  );
};

export default Card;

