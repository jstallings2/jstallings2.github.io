import React from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  tags?: string[];
  href?: string;
  titleLink?: string; // Link for title with external icon, but whole card is clickable
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  tags,
  href,
  titleLink,
  className = "",
  hoverable = true,
}) => {
  const cardContent = (
    <div
      className={`group rounded-2xl border border-muted-dark bg-surface p-6 shadow-card transition-all duration-300 ${
        hoverable
          ? "hover:scale-[1.02] hover:border-accent hover:shadow-glow"
          : ""
      } ${className}`}
    >
      {title && (
        <>
          {titleLink ? (
            <div className="mb-2 inline-flex items-center gap-2 text-xl font-semibold text-gray-100 transition-colors group-hover:text-accent">
              <span className="border-b-2 border-transparent group-hover:border-accent">
                {title}
              </span>
              <svg
                className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          ) : (
            <h3 className="mb-2 text-xl font-semibold text-gray-100">{title}</h3>
          )}
        </>
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

  // Use titleLink or href for the link
  const linkUrl = titleLink || href;

  if (linkUrl) {
    const isExternal = linkUrl.startsWith("http");
    return (
      <motion.a
        href={linkUrl}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
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

