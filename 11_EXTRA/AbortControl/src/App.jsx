import { useEffect, useState, useRef } from "react";

function App() {
  const [data, setData] = useState(null);
  const controllerRef = useRef(null); // ✅ persist controller

  useEffect(() => {
    controllerRef.current = new AbortController(); // create controller
    const signal = controllerRef.current.signal;

    const abortExample = () => {
      setTimeout(() => {
        fetch("https://catfact.ninja/fact", { signal })
          .then((response) => response.json())
          .then((res) => setData(res))
          .catch((err) => {
            if (err.name === "AbortError") {
              console.log("OLD REQUEST CANCELLED");
            } else {
              console.error("Fetch error:", err);
            }
          });
      }, 10000);
    };

    abortExample();

    return () => controllerRef.current.abort(); // cleanup on unmount
  }, []);

  const abortFunction = () => {
    controllerRef.current.abort(); // ✅ abort using ref
    console.log("Manual abort triggered!");
  };

  return (
    <>
      <p>DATA: {data ? data.fact : "DATA OBTAINED ABORTED"}</p>
      <button onClick={abortFunction}>
        CLICK ME TO ABORT THE FETCH (before 10 seconds)
      </button>
    </>
  );
}

export default App;
