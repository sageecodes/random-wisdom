import { useState } from "react";
import Header from "./components/Header";
import ButtonCard from "./components/ButtonCard";
import DisplayArea from "./components/DisplayArea";

function App() {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setImageUrl("");
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setContent(`${data.setup} - ${data.punchline}`); // ✅ use backticks
    } catch (error) {
      console.error(error);
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
      console.error(error);
      setContent("Oops! Could not fetch advice.");
    }
    setLoading(false);
  };

  const fetchQuote = async () => {
    setLoading(true);
    setImageUrl("");
    try {
      const res = await fetch("https://api.quotable.io/random", {
        cache: "no-store",
      });
      const data = await res.json();
      setContent(`${data.content} — ${data.author}`); // ✅ use backticks
    } catch (error) {
      console.error(error);
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

      const imgRes = await fetch("https://cataas.com/cat?json=true", {
        cache: "no-store",
      });
      const imgData = await imgRes.json();
      setImageUrl(`https://cataas.com${imgData.url}`); // ✅ use backticks
    } catch (error) {
      console.error(error);
      setContent("Oops! Could not fetch a cat fact.");
      setImageUrl("");
    }
    setLoading(false);
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
    </div>
  );
}

export default App;
