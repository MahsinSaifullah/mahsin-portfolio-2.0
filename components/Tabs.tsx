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
        className={cn('flex', {
          'flex-row overflow-x-scroll scrollbar-hide':
            orientation === 'horizontal',
          'flex-col': orientation === 'vertical',
        })}
      >
        {tabs.map((tab, index) => (
          <li
            onClick={() => onTabSelect(index)}
            className={cn(
              `text-slate-400 p-3 hover:bg-lighestNavy hover:text-lime rounded-sm cursor-pointer text-sm md:text-md`,
              {
                'bg-lighestNavy  text-lime': index === activeIndex,
                'border-l-lighestNavy border-l-2 rounded-tl-none rounded-bl-none':
                  orientation === 'vertical',
                'border-b-lighestNavy border-b-2 rounded-bl-none rounded-br-none min-w-fit':
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
