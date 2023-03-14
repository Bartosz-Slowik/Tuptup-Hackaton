import { Bars3Icon } from "@heroicons/react/24/solid";

interface Props {
  onClick: () => void;
}
const SideMenuFixedIcon = ({ onClick }: Props) => {
  return (
    <div
      className={`fixed cursor-pointer rounded-full top-5 right-5 bg-violet-900
      text-white p-2 flex text-center justify-center shadow-lg`}
      onClick={() => onClick && onClick()}
    >
      <Bars3Icon className="h-8 w-8 " />
    </div>
  );
};

export default SideMenuFixedIcon;
