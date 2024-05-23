import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WriteForm from "../WriteForm/WriteForm";
import axios from "axios";


const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const {id} = useParams();

  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/blogs/${id}/`);
      const post = response.data;
      setTitle(post.title);
      setContent(post.content);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
    if (title === "" || content === "") {
      alert("제목과 내용은 필수 입력항목 입니다.");
      return;
    }
    if (title.length > 100) {
      alert("제목은 100자 이내로 작성해주세요.");
      return;
    }
    fetch(`http://localhost:8000/blogs/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      })
    }).then((res) => {
      if (res.status !== 200)
        throw new Error("글 수정에 실패했습니다.");
      return res.json();})
    .then((res) => {
        const id = res.id;
        alert("글 수정이 완료되었습니다.");
        setTitle("");
        setContent("");
        navigate(`/post/${id}`);
    }).catch((error) => {
      console.error(error);
      alert("글 수정에 실패했습니다.");
    });
  }

  return (
    <div className="container" style={{position: "relative"}}>
      <button 
        onClick={() => {navigate(`/post/${id}`);}}
        style={{position: "absolute", top: "20px", left: "20px", backgroundColor: "white", border: "none", cursor: "pointer"}}
      >뒤로가기</button>
      <h2>글 수정하기</h2>
      <WriteForm 
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        content={content}
        handleContentChange={handleContentChange}
      />
    </div>
  )
}


export default EditPost;