import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Game from "./components/game/Game";
import About from "./components/about/About";
import Update from "./components/update/Update";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container px-4 sm:px-8">
        <Hero />
        <Game />
        <About />
        <Update />
      </main>
      <Footer />
    </>
  );
}

export default App;
