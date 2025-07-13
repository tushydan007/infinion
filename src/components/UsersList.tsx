import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { fetchUsers } from "../redux/features/user/userSlice";
import type { User } from "../redux/features/user/userSlice";
import UserCard from "./Usercard";
import UserModal from "./UserModal";
import AddUserForm from "./AddUserForm";

const UserList = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    dispatch(fetchUsers());
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedUser(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [dispatch]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-gray-700 dark:text-gray-100 text-xl animate-pulse">
          Loading users...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center">
        <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>
        <button
          onClick={() => dispatch(fetchUsers())}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen px-4 py-6">
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        List of Users in our Database
      </h1>
      <AddUserForm />

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users by name..."
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              avatar={user.avatar}
              fullName={user.name}
              email={user.email}
              onClick={() => setSelectedUser(user)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No users match your search.
          </p>
        )}
      </div>
      {/* Modal */}
      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
};

export default UserList;

// import React, { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
// import { fetchUsers } from "../redux/features/user/userSlice";
// import Usercard from "./Usercard";

// const UsersList: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { users, loading, error } = useAppSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
//         <div className="text-gray-700 dark:text-gray-100 text-xl animate-pulse">
//           Loading users...
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center">
//         <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>
//         <button
//           onClick={() => dispatch(fetchUsers())}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen px-4 py-6">
//       <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
//         User Directory
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {users.map((user) => (
//           <Usercard
//             key={user.id}
//             avatar={user.avatar}
//             fullName={user.name}
//             email={user.email}
//             onClick={() => console.log("Clicked:", user.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UsersList;
