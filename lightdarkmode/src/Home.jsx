import React from 'react'
import { useBgSwitch } from './context/BackgroundSwitcher'

function Home() {
  const { currbg, toggleSwitch } = useBgSwitch();

  return (
    // The background color will change based on the 'dark' class on the body.
    // In light mode, the background will be white and text will be black.
    // In dark mode, the background will be gray-800 and text will be gray-100.
    <div className="min-h-screen bg-white text-black dark:bg-gray-800 dark:text-gray-100 p-4 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4">Home Component</h1>
      <p className="mb-4">Current Background is: {currbg ? "Light" : "Dark"}</p>
      <button
        onClick={toggleSwitch}
        className="px-4 py-2 font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Home;