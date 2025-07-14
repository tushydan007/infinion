import React from "react";
import SearchInput from "./SearchInput";
import options from "../assets/options.png";
import apps from "../assets/apps.png";

type Props = {
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchDiv = ({ value, type, onChange }: Props) => {
  return (
    <div className="w-full bg-[#1E1E1E] rounded-lg mt-10 flex justify-between items-center pr-4 h-16">
      <SearchInput type={type} value={value} onChange={onChange} />
      <div className="md:flex gap-[14px] justify-center items-center hidden">
        <div className="w-10 h-10 rounded-lg">
          <img src={options} alt="options" />
        </div>
        <div className="w-10 h-10 rounded-lg">
          <img src={apps} alt="apps" />
        </div>
      </div>
    </div>
  );
};

export default SearchDiv;
