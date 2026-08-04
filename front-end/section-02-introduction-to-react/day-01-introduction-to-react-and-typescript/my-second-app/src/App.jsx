import "./App.css";
import Footer from "./components/Footer";
import SportsCard from "./components/SportsCard";

function App() {
  const categories = ["Sports", "Entertainment", "Journalism"];

  const isLoggedIn = true;

  function handleClick() {
    alert("The button was clicked");

  }
  return (
    <>
      <h1>App.jsx</h1>
      <button onClick={handleClick}>Click here</button>

      {isLoggedIn ? <p>Welcome!</p> : <p>Please log in</p>}

      <div className="news-type-list">
        {categories.map((category) => (
          <button key={category} className="news-type-item">
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <SportsCard
          newsTitle="Aston Martin hope upgrades end nightmare — and convince Alonso to stay"
          newsImage={
            "https://www.thetimes.com/imageserver/image/%2Fe194f5f3-b825-4b61-9c4e-a273c8208079.jpg?crop=5654%2C3769%2C173%2C0&resize=750&format=webp&quality=9"
          }
        />
        <SportsCard
          newsTitle="Duncan Scott’s record-breaking gold delights home crowd"
          newsImage={
            "https://www.thetimes.com/imageserver/image/%2F76339e69-1e92-4f17-87ca-9bc311791433.jpg?crop=1799%2C1199%2C0%2C53&format=webp&quality=9&resize=750"
          }
        />
      </div>
    </>
  );
}

export default App;
