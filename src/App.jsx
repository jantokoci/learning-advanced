import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/home";
import Accordian from "./pages/egy";
import ColorPicker from "./pages/ketto";
import Rating from "./pages/harom";
import ImageSlider from "./pages/negy";
import LoadMore from "./pages/ot";
import TreeView from "./pages/hat";
import QrCode from "./pages/het";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/egy" element={<Accordian />} />
          <Route path="/ketto" element={<ColorPicker />} />
          <Route path="/harom" element={<Rating noOfStars={5} />} />
          <Route
            path="/negy"
            element={
              <ImageSlider
                url={'https://picsum.photos/v2/list'}
                page={'1'}
                limit={'10'}
              />
            }
          />
          <Route path="/ot" element={<LoadMore />}/>
          <Route path="/hat" element={<TreeView />}/>
          <Route path="/het" element={<QrCode />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
