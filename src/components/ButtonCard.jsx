function ButtonCard({ text, onClick, color }) {
  return (
    <button
      className={`px-6 py-3 text-white rounded-lg hover:brightness-90 transition ${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonCard;
