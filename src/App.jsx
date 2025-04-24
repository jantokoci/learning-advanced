import {Routes, Route, BrowserRouter} from "react-router";
import Home from "./pages/home";
import Accordian from "./pages/egy";
import ColorPicker from "./pages/ketto";
import Rating from "./pages/harom";
import ImageSlider from "./pages/negy";
import LoadMore from "./pages/ot";
import QrCode from "./pages/het";
import ThemeSwitch from "./pages/nyolc";
import ScrollIndicator from "./pages/kilenc";
import TreeView from "./pages/hat";
import menus from "./components/datahat";
import menus2 from "./components/datahat2";
import TabTest from "./components/tiz/tab-test.jsx";
import ModalTest from "./components/tizenegy/modal-test.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/egy" element={<Accordian/>}/>
                    <Route path="/ketto" element={<ColorPicker/>}/>
                    <Route path="/harom" element={<Rating noOfStars={5}/>}/>
                    <Route
                        path="/negy"
                        element={
                            <ImageSlider
                                url={'https://api.thecatapi.com/v1/images/search'}
                                limit={'10'}
                            />
                        }
                    />
                    <Route path="/ot" element={<LoadMore/>}/>
                    <Route path="/hat" element={<TreeView manus={menus}/>}/>

                    <Route path="/hat2" element={<TreeView manus={menus2}/>}/>
                    <Route path="/het" element={<QrCode/>}/>
                    <Route path="/nyolc" element={<ThemeSwitch/>}/>
                    <Route path="/kilenc"
                           element={<ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>}/>
                    <Route path="/tizmiafa" element={<TabTest/>}/>
                    <Route path="/11" element={<ModalTest/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
