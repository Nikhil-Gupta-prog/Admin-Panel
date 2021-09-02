import "./App.css";
import Sidebar from "./Component/Header/Sidebar";
import Layout from "./Component/Layout/Layout";
import Navbar from "./Component/Header/Navbar";

function App() {
  return (
    

      <div className="App">
        <div className="part1_app">
        <Navbar />

        </div>
        <div className="part2_app">
          <Layout />
        </div>
      </div>
    
  );
}

export default App;
