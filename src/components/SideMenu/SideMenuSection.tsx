interface Props {
  className?: string;
  children: React.ReactNode;
}

const SideMenuSection = ({ className, children }: Props) => {
  return (
    <div
      className={`p-4 w-full flex flex-col bg-white shadow-md ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default SideMenuSection;
