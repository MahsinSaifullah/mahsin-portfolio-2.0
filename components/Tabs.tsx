'use client';

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
            className="text-slate-400 p-3 hover:bg-lighestNavy hover:text-lime rounded-sm border-l-lighestNavy border-l-2 rounded-tl-none rounded-bl-none"
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
