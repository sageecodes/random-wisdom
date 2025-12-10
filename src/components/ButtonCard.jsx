function ButtonCard({ text, onClick }) {
  return (
    <button
      className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonCard;
