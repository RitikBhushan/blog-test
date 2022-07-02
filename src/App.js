import Homepage from "./pages/homepage/Homepage";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/posts" element={<Homepage />} />
      <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
      <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
      <Route path="/post/:id" element={<Single />} />
      <Route path="/write" element={currentUser ? <Write /> : <Login />} />
      <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
