import { BrowserRouter } from "react-router-dom";
import {
    About, Contact, Experience,
    // Feedbacks,
    Hero, Navbar,
    Tech, Works, StarsCanvas
} from "./components"; // file based routing


const App = () => {

    return (
        // creating layout for the app
        // wrap all compoent into BrowserRouter to enable routing
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <Navbar />
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <div className="relative z-0">
                        <Hero />
                        <StarsCanvas />
                    </div>
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                {/* <Feedbacks /> */}
                <div className="relative z-0">
                    {/* // 3d star canvas */}
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
