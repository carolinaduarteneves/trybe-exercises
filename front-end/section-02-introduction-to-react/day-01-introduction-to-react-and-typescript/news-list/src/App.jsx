import "./App.css";
import NewsCard from "./components/NewsCard";

function App() {
  const news = [
    {
      id: 1,
      title: "Scott's record-breaking gold delights home crowd",
      type: "Sports",
      image:
        "https://images.openai.com/static-rsc-4/ZLcBY93YTCS20gpVi6cUkh51rwjodPu0JfuqO7iiEN8oye5pMvrAsebovqxQWGeuFOKYjJte3zBi7bk1rVpg1fhGpXNZWGeh8BjuzRLGSV9KIPanhwr390rkDV14tE6TMwsR_lXIxX98rHH0BVrL4xXccD7kXttz2Eje964d21o-QsdXPkVcjs9kz9ryhRLY?purpose=fullsize",
    },
    {
      id: 2,
      title: "New series breaks streaming records worldwide",
      type: "Entertainment",
      image:
        "https://images.openai.com/static-rsc-4/qqvUA99mQmVPfVKwKzYCJuOTPyrdASnB8sFH9YgKP6VJHFmBZLNimOaKYKEvQXryouzmPCP5FODyo9LIyCTgsdqCYajwo6p_wDFFAoIE3hcCwHncciSbNG4SrySXVEB8oBgz7JCeYadu_y-gqUfhN-l6IzGFKMxZfZThYkCV-xVgfFdeqKxnDiEJc92yXW1Z?purpose=fullsize",
    },
    {
      id: 3,
      title: "Local newspaper wins award for investigative report",
      type: "Journalism",
      image:
        "https://images.openai.com/static-rsc-4/QMwR_FakyRb6ErxnXP7Ed5HdilIiPuUESa6YgqmgDSJOFFTXHZYZi3wvb1n_asGsz0ZdxKk9flKBIu1Tl_zpFZEwNTGYvF7QyJW-vPDIrgS22_vrTdrTmJMgPx-6qiUxwjUv-X_EL79sgAPD3S9PHoXYMWhn38srY1TXhdtYxeZBSPgi9Gx8uW9UAtUBeHve?purpose=fullsize",
    },
  ];

  return (
    <>
      <h1>App.jsx</h1>

      <div
        className="news-type-list"
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        {news.map((category) => (
          <div key={category} className="news-card">
            <NewsCard
              newsId={category.id}
              newsTitle={category.title}
              newsType={category.type}
              newsImage={category.image}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
