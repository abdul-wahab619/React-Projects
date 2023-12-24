import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header />
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
