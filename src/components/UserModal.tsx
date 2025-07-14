import type { User } from "../redux/features/user/userSlice";
import phone from "../assets/phone.png";
import location from "../assets/loc.png";
import dob from "../assets/dobb.png";
import close from "../assets/closeIcon.png";

type Props = {
  user: User | null;
  onClose: () => void;
};

const UserModal = ({ user, onClose }: Props) => {
  if (!user) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)]"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mt-1 text-white mb-10">
          <h1>User Details</h1>
          <span
            onClick={onClose}
            className="text-xl font-semibold cursor-pointer"
          >
            <img src={close} alt="close" />
          </span>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white px-2 min-w-36 bg-gradient-to-r from-[#3B82F6] to-[#9333EA]">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
            {user.email}
          </p>
        </div>
        <div className="space-y-8">
          <p className="text-sm text-gray-500 dark:text-gray-300 flex gap-x-3">
            <span>
              <img src={phone} alt="phone" />
            </span>
            <div className="flex flex-col">
              <p>Phone</p>
              {user.phone.split(/x|ext/i)[0].trim()}
            </div>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 flex gap-x-3">
            <span className="flex">
              <img src={location} alt="location" className="w-5 h-5" />
            </span>
            <div className="flex flex-col">
              <p>Location</p>
              {user.location}
            </div>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 flex gap-x-3">
            <span>
              <img src={dob} alt="DOB" />
            </span>
            <div className="flex flex-col">
              <p>DOB</p>
              {user.dob?.split("T")[0]}
            </div>
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
