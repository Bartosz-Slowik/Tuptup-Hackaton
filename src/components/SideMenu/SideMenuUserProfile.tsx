import { UserIcon } from "@heroicons/react/24/solid";

const SideMenuUser = () => {
  return (
    <div className="flex flex-row">
      <div className="flex justify-center items-center p-3 rounded-full bg-gray-200">
        <UserIcon className="h-6 w-6 " />
      </div>
      <div className="flex flex-col ml-3">
        <div className="font-bold">Adrian</div>
        <div className="text-green-500 text-sm">Edit profile</div>
      </div>
    </div>
  );
};

export default SideMenuUser;
