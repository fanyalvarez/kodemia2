import { Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage";
import PostPage from "./Pages/PostPage";
import Navbar from "./components/elements/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/createPost" element={<FormPage />}></Route>
        <Route path="/:id" element={<PostPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
