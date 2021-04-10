import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      {/* Home */}
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
