import { Route, Routes } from "react-router";
import "./App.css";
import { Suspense, lazy } from "react";
import { LoaderIcon } from "react-hot-toast";

const Users = lazy(() => import("./pages/users"));
const CreateUser = lazy(() => import("./pages/CreateUser"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-[#121212]">
                <LoaderIcon
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <p className="mt-5 text-gray-500 text-2xl font-['kavoon'] dark:text-gray-300">
                  Loading...
                </p>
              </div>
            }
          >
            <Users />
          </Suspense>
        }
      />
      <Route path="/register" element={<CreateUser />} />
    </Routes>
  );
}

export default App;
