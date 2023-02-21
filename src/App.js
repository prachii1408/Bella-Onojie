import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Working from "./components/Working";
import Footer from "./components/Footer";
import "./App.css";

function App() {
 const content=[
  {
    "title":"Create an account",
    "description":"Create/login to an existing account to get started.",
    "result":"An account is created with your email and a desired password.",
    "image":"images/login.png",
    "index":0
  },
  {
    "title":"Explore varieties",
    "description":"Shop for your favourite meals as e dey hot.",
    "result":"Shop for your favourite meals or drinks and enjoy while doing it.",
    "image":"images/content.png",
    "index":1
  },
  {
    "title":"Checkout",
    "description":"When you done check out and get it delivered.",
    "result":"When you done check out and get it delivered with ease.",
    "image":"images/payment.png",
    "index":2
  },
 ]
// var num=content.length();


  return (
    <>
      <Navbar />
      <Home />
      <Working content={content[0]}/>
      <Working content={content[1]}/>
      <Working content={content[2]}/>
      <Footer />
    </>
   
  );
}

export default App;
