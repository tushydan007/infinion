import { Link } from "react-router";
import clsx from "clsx";

type Props = {
  title: string;
  source: string;
  activeLink: string;
  onClick: () => void;
};

const SideLinks = ({ title, source, activeLink, onClick }: Props) => {
  return (
    <Link
      to={"#"}
      onClick={onClick}
      className={clsx(
        "flex items-center gap-3 px-4 py-2 text-sm font-medium",
        activeLink === title
          ? "border-l-4 border-blue-500 bg-[#222222]"
          : "border-l-4 border-transparent text-gray-600 hover:bg-[#08070725]"
      )}
    >
      <img src={source} alt="image" className="w-6 h-6" />
      <span className="text-[#999]">{title}</span>
    </Link>
  );
};

export default SideLinks;
