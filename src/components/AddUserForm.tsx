import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useAppDispatch } from "../redux/reduxHooks";
import { fetchUsers } from "../redux/features/user/userSlice";

const userSchema = z.object({
  name: z.string().min(2, "Name is required"),
  location: z.string().min(2, "Location is required"),
  dob: z
    .string()
    .refine(
      (val) => /^\d{4}-\d{2}-\d{2}$/.test(val),
      "Date of Birth must be in YYYY-MM-DD format"
    ),
});

type UserFormData = z.infer<typeof userSchema>;

const AddUserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: UserFormData) => {
    try {
      const response = await axios.post(
        "https://687124747ca4d06b34b97d3d.mockapi.io/api/userId",
        data
      );
      toast.success("User added successfully!");
      setStatus("success");
      reset();
      dispatch(fetchUsers()); // ✅ Refetch user list
    } catch (err) {
      toast.error("Failed to add user.");
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto mb-10">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Add New User
      </h2>

      {/* Success / Error Banner */}
      {status === "success" && (
        <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm">
          ✅ User has been added successfully!
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
          ❌ Failed to add user. Try again.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">
            Location
          </label>
          <input
            type="text"
            {...register("location")}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dob")}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
          {errors.dob && (
            <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Submitting..." : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";

// const userSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   location: z.string().min(2, "Location is required"),
//   dob: z
//     .string()
//     .refine(
//       (val) => /^\d{4}-\d{2}-\d{2}$/.test(val),
//       "Date of Birth must be in YYYY-MM-DD format"
//     ),
// });

// type UserFormData = z.infer<typeof userSchema>;

// const AddUserForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<UserFormData>({
//     resolver: zodResolver(userSchema),
//   });

//   const onSubmit = async (data: UserFormData) => {
//     try {
//       const response = await axios.post(
//         "https://687124747ca4d06b34b97d3d.mockapi.io/api/userId",
//         data
//       );
//       console.log("User created:", response.data);
//       reset();
//       alert("User added successfully!");
//     } catch (err) {
//       alert("Failed to add user. Please try again.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto mb-10">
//       <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
//         Add New User
//       </h2>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label className="block mb-1 text-gray-700 dark:text-gray-200">
//             Name
//           </label>
//           <input
//             type="text"
//             {...register("name")}
//             className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block mb-1 text-gray-700 dark:text-gray-200">
//             Location
//           </label>
//           <input
//             type="text"
//             {...register("location")}
//             className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
//           />
//           {errors.location && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.location.message}
//             </p>
//           )}
//         </div>

//         <div>
//           <label className="block mb-1 text-gray-700 dark:text-gray-200">
//             Date of Birth
//           </label>
//           <input
//             type="date"
//             {...register("dob")}
//             className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
//           />
//           {errors.dob && (
//             <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           {isSubmitting ? "Submitting..." : "Add User"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddUserForm;
