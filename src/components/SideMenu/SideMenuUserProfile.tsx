import { UserIcon } from "@heroicons/react/24/solid";

const SideMenuUser = () => {
  return (
    <div className="flex flex-row">
      <div className="flex items-center justify-center rounded-full bg-gray-200 p-3">
        <UserIcon className="h-6 w-6 " />
      </div>
      <div className="ml-3 flex flex-col">
        <div className="font-bold">Adrian</div>
        <div className="text-sm text-green-500">Edit profile</div>
      </div>
    </div>
  );
};

export default SideMenuUser;
