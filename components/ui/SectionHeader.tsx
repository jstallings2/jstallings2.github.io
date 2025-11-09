import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-light md:text-xl">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;

