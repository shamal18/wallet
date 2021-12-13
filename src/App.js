import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Img1 from "./assets/images/1.jpg";

import Slider from "./components/Slider";



export default function App() {

  return (
    <>
      <Navbar title="Wallet App" />
      <Slider img={Img1}/>
      {/*<Navbar title="Wallet Home"/> */}
      {/* <Footer title="Developer" name="Bootstrap.com"  btn="danger"/>}*/}
      {/*<Footer name="Team"/>*/}
      <Footer title="Team" name="By RTC" tagLine="Affordable Soluation For Everyone." btn="success" />

      
    </>
  )

}