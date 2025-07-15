type UserCardProps = {
  avatar: string;
  fullName: string;
  email: string;
  onClick: () => void;
};

const UserCard = ({ avatar, fullName, email, onClick }: UserCardProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-[#1E1E1E] shadow-md rounded-xl p-4 transition hover:shadow-lg hover:scale-[1.01] duration-200 w-full max-w-sm h-[214px] mx-auto"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={avatar}
          alt={`${fullName}'s avatar`}
          loading="lazy"
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-200 dark:border-gray-700"
        />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {fullName}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
