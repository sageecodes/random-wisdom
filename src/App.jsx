import { useState } from "react";
import Header from "./components/Header";
import ButtonCard from "./components/ButtonCard";
import DisplayArea from "./components/DisplayArea";

function App() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();

      setContent(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error(error);
      setContent("Oops! Could not fetch a joke.");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch random advice
  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setContent(data.slip.advice);
    } catch (error) {
      console.error(error);

      setContent("Oops! Could not fetch advice.");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch random quote
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random", {
        cache: "no-store",
      });

      const data = await res.json();
      setContent(`${data.content} — ${data.author}`);
    } catch (error) {
      console.error(error);
      setContent("Oops! Could not fetch a quote.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header title="Random Wisdom" />

      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        <ButtonCard text="Random Joke" onClick={fetchJoke} />
        <ButtonCard text="Random Advice" onClick={fetchAdvice} />
        <ButtonCard text="Random Quote" onClick={fetchQuote} />
      </div>

      <DisplayArea content={content} loading={loading} />
    </div>
  );
}

export default App;
