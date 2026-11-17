import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [dogs, setDogs] = useState("");

  const getDogs = () => {
    axios
      .get("/api/dogs")
      .then((response) => {
        setDogs(response.data.message);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div className="h-screen w-full bg-amber-200 flex justify-center items-center gap-2 flex-col">
      <h1 className="text-5xl mb-8 text-orange-600 font-extrabold">
        Dogs Photos
      </h1>

      <div className="bg-white rounded-xl shadow-2xl w-[600px] h-[500px] flex flex-col justify-center items-center gap-5 p-5">
        <img
          src={dogs}
          alt="Dogs"
          className="w-full h-[350px] object-contain"
        />

        <button
          onClick={getDogs}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
        >
          Change Dog
        </button>
      </div>
    </div>
  );
}

export default App;
