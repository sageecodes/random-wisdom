function DisplayArea({ content, loading, imageUrl }) {
  return (
    <div
      key={content + imageUrl} // ensures React re-renders and triggers animation
      className="mt-8 p-6 bg-white rounded-lg shadow-md w-full max-w-xl text-center transition-opacity duration-700 opacity-0 animate-fadeIn"
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="mb-4">
            {content || "Click a button to get random wisdom!"}
          </p>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Random Cat"
              className="mx-auto rounded-lg shadow-lg max-h-64 object-cover"
            />
          )}
        </>
      )}
    </div>
  );
}

export default DisplayArea;
