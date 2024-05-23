import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WritePost from "./components/WritePost/WritePost";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";
import EditPost from "./components/EditPost/EditPost";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<WritePost />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
