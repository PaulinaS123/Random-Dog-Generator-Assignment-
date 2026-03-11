import { useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [error, setError] = useState("");

  const getDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
      setError("");
    } catch (err) {
      setError("Failed to load dog image.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Random Dog Generator</h1>

      <button onClick={getDog}>Get Random Dog</button>

      {error && <p>{error}</p>}

      {dogImage && (
        <div>
          <img src={dogImage} alt="Random Dog" width="400" />
        </div>
      )}
    </div>
  );
}

export default App;
