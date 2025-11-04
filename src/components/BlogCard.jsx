import "../Card.css";

export default function BlogCard({ image, category, title, description, author, authorImg, date }) {
  return (
    <article className="card">
      <div className="card-image-div">
        <img src={image} alt="Прев'ю" className="card-image" />
      </div>
      <div className="card-body">
        <span className="card-tag">{category}</span>
        <br />
        <small className="card-date">{date}</small>
        <h2 className="card-title">{title}</h2>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="card-author">
          <img src={authorImg} alt="Автор" />
          <span>{author}</span>
        </div>
      </div>
    </article>
  );
}
