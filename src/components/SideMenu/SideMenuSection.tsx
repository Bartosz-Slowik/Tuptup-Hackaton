interface Props {
  className?: string;
  children: React.ReactNode;
}

const SideMenuSection = ({ className, children }: Props) => {
  return (
    <div
      className={`flex w-full flex-col bg-white p-4 shadow-md ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default SideMenuSection;
