import React from "react";
import SearchInput from "./SearchInput";
import options from "../assets/options.png";

type Props = {
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchDiv = ({ value, type, onChange }: Props) => {
  return (
    <div className="w-full bg-[#1E1E1E] rounded-lg flex justify-between items-center my-10">
      <SearchInput type={type} value={value} onChange={onChange} />
      <div className="flex gap-[14px] max-w-[85px]  ">
        <div className="w-10 h-10 rounded-lg border-2 border-[#343434]">
          <img src={options} alt="" />
        </div>
        <div>4</div>
      </div>
    </div>
  );
};

export default SearchDiv;
