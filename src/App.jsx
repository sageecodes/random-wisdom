import { useState } from "react";
import Header from "./components/Header";
import ButtonCard from "./components/ButtonCard";
import DisplayArea from "./components/DisplayArea";

function App() {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Fetch functions
  const fetchJoke = async () => {
    setLoading(true);
    setImageUrl("");
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setContent(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.log(error);

      setContent("Oops! Could not fetch a joke.");
    }
    setLoading(false);
  };

  const fetchAdvice = async () => {
    setLoading(true);
    setImageUrl("");
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setContent(data.slip.advice);
    } catch (error) {
      console.log(error);

      setContent("Oops! Could not fetch advice.");
    }
    setLoading(false);
  };

  const fetchQuote = async () => {
    setLoading(true);
    setImageUrl("");
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setContent(`${data.content} —${data.author}`);
    } catch (error) {
      console.log(error);

      setContent("Oops! Could not fetch a quote.");
    }
    setLoading(false);
  };

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const factRes = await fetch("https://catfact.ninja/fact");
      const factData = await factRes.json();
      setContent(factData.fact);

      const imgRes = await fetch("https://cataas.com/cat?json=true");
      const imgData = await imgRes.json();
      setImageUrl(`https://cataas.com${imgData.url}`);
    } catch (error) {
      console.log(error);

      setContent("Oops! Could not fetch a cat fact.");
      setImageUrl("");
    }
    setLoading(false);
  };

  // Save favorite
  const saveFavorite = () => {
    if (!content) return;
    const newFavorites = [...favorites, { content, imageUrl }];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header title="Random Wisdom" />

      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        <ButtonCard
          text="Random Joke"
          onClick={fetchJoke}
          color="bg-teal-500"
        />
        <ButtonCard
          text="Random Advice"
          onClick={fetchAdvice}
          color="bg-orange-500"
        />
        <ButtonCard
          text="Random Quote"
          onClick={fetchQuote}
          color="bg-purple-500"
        />
        <ButtonCard
          text="Random Cat Fact"
          onClick={fetchCatFact}
          color="bg-pink-500"
        />
      </div>

      <DisplayArea content={content} loading={loading} imageUrl={imageUrl} />

      {content && (
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={saveFavorite}
        >
          Save to Favorites
        </button>
      )}

      {favorites.length > 0 && (
        <div className="mt-8 w-full max-w-xl">
          <h2 className="text-xl font-bold mb-4">Favorites</h2>
          {favorites.map((item, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow">
              <p>{item.content}</p>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt="favorite"
                  className="mt-2 rounded-lg max-h-40"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
