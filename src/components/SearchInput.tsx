import searchIcon from "../assets/search2.png";

type Props = {
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ value, type, onChange }: Props) => {
  return (
    <div className="flex w-full pl-6 gap-3 items-center">
      <img src={searchIcon} alt="search" className="w-[18px] h-[18px]" />
      <div className="flex justify-center items-center">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder="Search users by name..."
          className="w-full placeholder-[#838383] max-w-md py-2 px-4 text-gray-300 dark:border-gray-600 bg-white dark:bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default SearchInput;
