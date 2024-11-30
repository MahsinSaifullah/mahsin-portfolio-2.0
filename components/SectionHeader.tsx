import React from 'react';

interface SectionHeaderProps {
  index: string;
  heading: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ index, heading }) => {
  return (
    <div className="flex items-center mb-10">
      <h2 className="text-slate-300 text-sm md:text-lg">
        <span className="text-lime">{index}.</span> {heading}
      </h2>
      <div
        aria-hidden="true"
        className="w-[200px] h-[1px] bg-lighestNavy ml-4"
      />
    </div>
  );
};

export default SectionHeader;
