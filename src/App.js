import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import TabLinks from "./components/TabLinks/TabLinks";
import Favourite from "./pages/Favourites/Favourite";
import Home from "./pages/Home/Home";
import Recent from "./pages/Recent/Recent";

function App() {
  return (
    <div className="App">
      <Header />
      <TabLinks/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/rec" element={<Recent />} />
      </Routes>
    </div>
  );
}

export default App;
