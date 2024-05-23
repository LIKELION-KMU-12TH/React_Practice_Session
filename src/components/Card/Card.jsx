import { Link } from 'react-router-dom';
import "./Card.css";

const Card = ({
  id,
  title,
  content,
}) => {
  return (
    <Link to={`/post/${id}`}>
      <div className="card">
        <h2>{title}</h2>
        <p>{content.slice(0, 20)}</p>
      </div>
    </Link>
  );
}

export default Card;
