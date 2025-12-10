function DisplayArea({ content, loading }) {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md w-full max-w-xl text-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{content || "Click a button to get random wisdom!"}</p>
      )}
    </div>
  );
}

export default DisplayArea;
