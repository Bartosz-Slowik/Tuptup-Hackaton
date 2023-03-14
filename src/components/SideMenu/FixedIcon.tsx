import { Bars3Icon } from "@heroicons/react/24/solid";

interface Props {
  onClick: () => void;
}
const FixedIcon = ({ onClick }: Props) => {
  return (
    <div
      className={`fixed top-5 right-5 flex cursor-pointer justify-center
      rounded-full bg-violet-900 p-2 text-center text-white shadow-lg`}
      onClick={() => onClick && onClick()}
    >
      <Bars3Icon className="h-8 w-8 " />
    </div>
  );
};

export default FixedIcon;
