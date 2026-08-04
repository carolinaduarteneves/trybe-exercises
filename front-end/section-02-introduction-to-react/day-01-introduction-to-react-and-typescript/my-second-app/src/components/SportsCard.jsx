function SportsCard({ newsTitle, newsImage }) {

  return (
    <>
      <div className="news-card">
        <img
          src={newsImage}
          alt={newsTitle}
        />
        <h2>{newsTitle}</h2>
      </div>
    </>
  );
}

export default SportsCard;
