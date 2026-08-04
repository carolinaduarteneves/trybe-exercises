function NewsCard({ newsId, newsTitle, newsType, newsImage }) {
  return (
    <>
      <div className="news-card">
        <img src={newsImage} alt={newsTitle} />
        <h2> Title: {newsTitle}</h2>
        <h3> Id: {newsId}</h3>
        <h4> Type: {newsType}</h4>
      </div>
    </>
  );
}

export default NewsCard;
