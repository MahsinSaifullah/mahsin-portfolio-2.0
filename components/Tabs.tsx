'use client';

import { cn } from '@/lib/utils';

type TabOrientation = 'vertical' | 'horizontal';

interface TabsProps {
  orientation: TabOrientation;
  tabs: string[];
  activeIndex: number;
  onTabSelect: (index: number) => void;
}

const Tabs = ({
  children,
  orientation,
  tabs,
  onTabSelect,
  activeIndex,
}: React.PropsWithChildren<TabsProps>) => {
  return (
    <div
      className={`flex ${
        orientation === 'horizontal' ? 'flex-col' : 'flex-row'
      } gap-10`}
    >
      <ul
        className={`flex ${
          orientation === 'horizontal' ? 'flex-row' : 'flex-col'
        }`}
      >
        {tabs.map((tab, index) => (
          <li
            onClick={() => onTabSelect(index)}
            className={cn(
              `text-slate-400 p-3 hover:bg-lighestNavy hover:text-lime rounded-sm cursor-pointer`,
              {
                'bg-lighestNavy  text-lime': index === activeIndex,
                'border-l-lighestNavy border-l-2 rounded-tl-none rounded-bl-none':
                  orientation === 'vertical',
                'border-b-lighestNavy border-b-2 rounded-bl-none rounded-br-none':
                  orientation === 'horizontal',
                'border-l-lime':
                  index === activeIndex && orientation === 'vertical',
                'border-b-lime':
                  index === activeIndex && orientation === 'horizontal',
              }
            )}
            key={index}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="">{children}</div>
    </div>
  );
};

export default Tabs;
