type TabTitleProps = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

function TabTitle({ title, index, setSelectedTab }: TabTitleProps) {
  return (
    <li>
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </li>
  );
}

export default TabTitle;
