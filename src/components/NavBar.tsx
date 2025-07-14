import bell from "../assets/Group.png";
import avatar from "../assets/avatar.jpg";
import searchIcon from "../assets/search.png";
import hamburger from "../assets/hamburger.png";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center bg-transparent">
        <div className="block md:hidden">
          <img src={hamburger} alt="hamburger-menu-icon" />
        </div>
        <div className="bg-[#181818] hidden rounded-full gap-[10px] w-[298px] h-[44px] md:flex justify-start items-center pl-6">
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search..."
            name="value"
            id="value"
            className="placeholder-[#838383] text-gray-300 outline-none border-none"
          />
        </div>

        <div className="md:flex hidden gap-4 justify-center items-center">
          <div className="relative w-10 h-10 rounded-full bg-[#181818] flex justify-center items-center cursor-pointer">
            <img
              src={bell}
              alt="notification icon"
              className="w-[15.42px] h-[16.96px]"
            />
          </div>

          <img
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
