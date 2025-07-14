import { Link } from "react-router";
import addNewUser from "../assets/addNewUser.png";

const AddNew = () => {
  return (
    <div className="mt-[127px]">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="font-semibold text-2xl text-white">User Directory</p>
          <p className="text-sm text-[#B3B4B3]">Find a list of users below</p>
        </div>
        <Link to={"/register"}>
          <img src={addNewUser} alt="add-user" />
        </Link>
      </div>
    </div>
  );
};

export default AddNew;
