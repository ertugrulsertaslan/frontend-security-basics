import "./App.css";
import XSSExample from "./components/XXSExample";
import CSRFExample from "./components/CSRFExample";
function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-4xl text-red-600 w-full text-center">
          Frontend Security Basics
        </h1>
        <div className="flex flex-col justify-center items-center">
          <XSSExample />
          <CSRFExample />
        </div>
      </div>
    </>
  );
}

export default App;
