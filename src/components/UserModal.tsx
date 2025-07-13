import React from "react";
import type { User } from "../redux/features/user/userSlice";

type Props = {
  user: User | null;
  onClose: () => void;
};

const UserModal: React.FC<Props> = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)]"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
            {user.email}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {user.phone}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {user.location}
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
