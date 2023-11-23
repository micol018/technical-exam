import "./App.css";
import Banner from "./components/Banner";
import Schedule from "./components/Schedule";

function App() {
  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-[url('./assets/bg.png')] font-sans">
        <Banner />
        <Schedule />
      </div>
    </>
  );
}

export default App;
