import "./WriteForm.css";

function WriteForm({
  handleSubmit,
  title,
  setTitle,
  content,
  handleContentChange
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>제목</label>
        <input type="text" value={title} onChange={
          (e) => {
            setTitle(e.target.value)
          }
        }/>
      </div>
      <div className="input-group">
        <label>내용</label>
        <textarea value={content} onChange={handleContentChange}></textarea>
      </div>
      <button type="submit">완료</button>
    </form>
  )
}

export default WriteForm;