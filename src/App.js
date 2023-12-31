import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import AuctionLounge from "./pages/AuctionLounge";
import Captains from "./pages/Captains";
import CaptainDetail from "./pages/CaptainDetail";
import Players from "./pages/Players";
import PlayerDetail from "./pages/PlayerDetail";

export function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<AuctionLounge />} />
          <Route path="/captains" element={<Captains />} />
          <Route path="/players" element={<Players />} />
          <Route path="/captains/:name" element={<CaptainDetail />} />
          <Route path="/players/:name" element={<PlayerDetail />} />        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;