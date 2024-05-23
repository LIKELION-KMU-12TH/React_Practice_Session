import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get("http://localhost:8000/blogs/");
    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <h1>Home</h1>
      <button style={{height: "50px"}} onClick={() => window.location.href = "/write"}>글 작성하기</button>
      </div>
      <hr style={{width: "100%"}}/>
      <div style={{width : "100%"}}>
        {posts.length !== 0 ? posts.map((post) => (
          <Card id={post.id} title={post.title} content={post.content} key={post.id} />
        )) : (
          <p>게시글이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Home
  