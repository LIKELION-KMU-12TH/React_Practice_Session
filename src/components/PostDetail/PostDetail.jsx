import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/blogs/${id}/`);
      setPost(response.data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/blogs/${id}/`);
      alert("글 삭제가 완료되었습니다.");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="container">
      <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <button 
          onClick={() => window.location.href = "/"}
          style={{ backgroundColor: "white", border: "none", cursor: "pointer"}}
        >
          뒤로가기
        </button>
        <h2>{post.title}</h2>
        <div style={{display: "flex", gap: "16px"}}>
          <button onClick={() => window.location.href = `/edit/${id}`}>
            수정하기
          </button>
          <button onClick={handleDelete}>
            삭제하기
          </button>
        </div>
        <hr style={{width: "100%"}}/>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
