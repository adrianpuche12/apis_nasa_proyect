import Home from "../views/Home/Home";
import Apod from "../views/Apod/Apod";
import NeoWs from "../views/NeoWs/NeoWs";
import Donki from "../views/Donki/Donki";
import Earth from "../views/Earth/Earth";
import Eonet from "../views/Eonet/Eonet";
import Epic from "../views/Epic/Epic";
import Exoplanet from "../views/Exoplanet/Exoplanet";
import Genelab from "../views/Genelab/Genelab";
import Insight from "../views/Insight/Insight";
import MarsPhotos from "../views/MarsPhotos/MarsPhotos";
import Librery from "../views/Librery/Librery";
import SatelliteCenter from "../views/SatelliteCenter/SatelliteCenter";
import Ssd from "../views/Ssd/Ssd";
import Techport from "../views/Techport/Techport";
import TleApi from "../views/TleApi/TleApi";
import TechTransfer from "../views/TechTransfer/TechTransfer";
import Vesta from "../views/Vesta/vesta"
import App from "../App";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/apod' element={<Apod />}></Route>
                    <Route path='/NeoWs' element={<NeoWs />}></Route>
                    <Route path='/Vesta' element={<Vesta />}></Route>
                    <Route path='/Donki' element={<Donki />}></Route>
                    <Route path='/Earth' element={<Earth />}></Route>
                    <Route path='/Eonet' element={<Eonet />}></Route>
                    <Route path='/Epic' element={<Epic />}></Route>
                    <Route path='/Exoplanet' element={<Exoplanet />}></Route>
                    <Route path='/Genelab' element={<Genelab />}></Route>
                    <Route path='/Insight' element={<Insight />}></Route>
                    <Route path='/MarsPhotos' element={<MarsPhotos />}></Route>
                    <Route path='/Librery' element={<Librery />}></Route>
                    <Route path='/TechTransfer' element={<TechTransfer />}></Route>
                    <Route path='/SatelliteCenter' element={<SatelliteCenter />}></Route>
                    <Route path='/Ssd' element={<Ssd />}></Route>
                    <Route path='/Techport' element={<Techport />}></Route>
                    <Route path='/TleApi' element={<TleApi />}></Route>
                </Route>
            </Routes>
        </Router>
    )
};

export default AppRoutes;