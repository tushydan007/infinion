import { Route, Routes } from "react-router";
import "./App.css";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/register" element={<CreateUser />} />
    </Routes>
  );
}

export default App;
