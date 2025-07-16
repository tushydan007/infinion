import { Route, Routes } from "react-router";
import "./App.css";
import Users from "./pages/users";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/register" element={<CreateUser />} />
    </Routes>
  );
}

export default App;
