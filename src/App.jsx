import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Hero />
            <ProjectSection />
            <Footer />
        </>
    );
}

export default App;
