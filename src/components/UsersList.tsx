import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { fetchUsers } from "../redux/features/user/userSlice";
import type { User } from "../redux/features/user/userSlice";
import UserCard from "./Usercard";
import UserModal from "./UserModal";
import { LoaderIcon } from "react-hot-toast";
import NavBar from "./NavBar";
import AddNew from "./AddNew";
import SearchDiv from "./SearchDiv";
import SideBarOptions from "./SideBarOptions";

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
    return <LoaderIcon />;
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
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:fixed md:flex flex-col h-screen bg-[#1E1E1E] w-[233px] left-0 top-0 z-10">
        <h1 className="mt-7 text-left ml-10 font-normal text-3xl bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-transparent bg-clip-text font-['kavoon']">
          useID
        </h1>
        <div>
          <SideBarOptions />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 dark:bg-[#121212] min-h-screen px-10 py-6 w-full md:ml-[233px]">
        <NavBar />
        <AddNew />

        {/* Search Input */}
        <SearchDiv
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* User Cards */}
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
    </div>
  );
};

export default UserList;
