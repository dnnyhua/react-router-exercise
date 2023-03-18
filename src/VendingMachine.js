import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import HotCheetos from "./HotCheetos";
import CheezeIt from "./CheezeIt";
import Takis from "./Takis";


const VendingMachine = () => {

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path="/hotcheetos" element={<HotCheetos />} />
                    <Route exact path="/cheezeit" element={<CheezeIt />} />
                    <Route exact path="/takis" element={<Takis />} />
                </Routes>
            </BrowserRouter>
        </main>


    )
}

export default VendingMachine