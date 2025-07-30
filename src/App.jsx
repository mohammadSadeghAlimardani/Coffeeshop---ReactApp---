import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Questions from "./Components/Questions/Questions";
import Reviews from "./Components/Reviews/Reviews";
import Reserve from "./Components/Reserve/Reserve";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Products />
            <Reviews />
            <Questions />
            <Reserve />
            <Contact />
            <Footer />
        </main>
    );
};
export default App;
