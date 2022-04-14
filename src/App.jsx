import { useContext } from "react";
import About from "./components/intro/about/About";
import Contact from "./components/intro/contact/Contact";
import Intro from "./components/intro/Intro";
import Nav from "./components/intro/nav/Nav";
import ProductList from "./components/intro/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Footer from "./components/intro/footer/Footer";
import './index.css';
// import ab from '../src/img/tic-tac-toe.PNG'



const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return  <div
  style={{
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",
  }}
>
  {/* <Toggle/> */}
  <Intro />
 <Nav/>
 <About/>
 <ProductList/>
 <Contact />
 <Footer/>
  {/* <About />
  <ProductList />
  <Contact /> */}
</div>
};

export default App;