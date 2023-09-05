import { useState } from "react";
import "./../public/assets/css/main.css";
import { Header } from "./Header";
import Inicio from "./Inicio";
import Explore from "./Explore";
import { Sobre } from "./Sobre";
import { Footer } from "./Footer";

function App() {
    return (
        <>
            <Header />
            <main>
                <Inicio />
                <Explore />
                <Sobre />
            </main>
            <Footer />
        </>
    );
}
export default App;
