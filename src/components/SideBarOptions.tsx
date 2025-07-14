import SideLinks from "./SideLinks";
import dashboardIcon from "../assets/sideBarIcons/Vector.png";
import usersIcon from "../assets/sideBarIcons/users.png";
import vouchersIcon from "../assets/sideBarIcons/vouchers.png";
import analyticsIcon from "../assets/sideBarIcons/analytics.png";
import spotLight from "../assets/sideBarIcons/spotlight.png";
import { useState } from "react";

const options = [
  { name: "Dashboard", icon: dashboardIcon, link: "#" },
  { name: "Users", icon: usersIcon, link: "#" },
  { name: "Vouchers", icon: vouchersIcon, link: "#" },
  { name: "Analytics", icon: analyticsIcon, link: "#" },
  { name: "SpotLight", icon: spotLight, link: "#" },
];

const SideBarOptions = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="text-[#B3B4B3] h-[549.96px] mt-[46.85px] space-y-10">
      {options.map((option) => (
        <SideLinks
          onClick={() => setActiveLink(option.name)}
          source={option.icon}
          activeLink={activeLink}
          title={option.name}
          key={option.name}
        />
      ))}
    </div>
  );
};

export default SideBarOptions;
