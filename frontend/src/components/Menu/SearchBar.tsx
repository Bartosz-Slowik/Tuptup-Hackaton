import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface Props {
  text: string;
  value: string;
  setValue: (input: string) => void;
  className?: string;
}

const SearchBar = ({ text, value, setValue, className }: Props) => {
  return (
    <div className={`w-full p-2 ${className ? className : ""}`}>
      <div className={`relative w-full`}>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <MagnifyingGlassIcon className="h-6 w-6 " />
        </span>
        <input
          type="text"
          className="font-bolder w-full rounded-md bg-gray-200 py-2.5 pl-10 shadow-sm focus:outline-none"
          placeholder={text}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
