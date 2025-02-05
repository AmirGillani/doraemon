import Home from "./components/Home";
import Navbar from "./components/Nav";
import Friends from "./components/Friends";
import Game from "./components/Game";
import Message from "./components/Message";
import Pocket from "./components/Pocket";
import FojikaFFojio from "./components/FojikaFFojio";
import Footer from "./components/Footer";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <>
      <DarkMode />
      <Home />
      <Navbar />
      <Friends />
      <Pocket />
      <FojikaFFojio />
      <Game />
      <Message />
      <Footer />
    </>
  );
}

export default App;
