interface Props {
  className?: string;
  Icon?: React.ElementType;
  text: string;
  onClick?: () => void;
}
const Button = ({ className, Icon, text, onClick }: Props) => {
  return (
    <div
      className={`flex flex-row cursor-pointer p-2 ${
        className ? className : ""
      }`}
      onClick={() => onClick && onClick()}
    >
      {Icon && <Icon className="h-6 w-6" />}
      <div className="ml-4">{text}</div>
    </div>
  );
};

export default Button;
