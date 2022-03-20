import "./App.css";
import  {Navbar} from "./Components/Home/navigation";
import  {Image}  from "./Components/Home/image";
import {Footer} from "./Components/Home/footer/footer";
import  {Container, ContainerDeal}  from "./Components/Home/container/container";
import "https://kit.fontawesome.com/b9a620178b.js";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Image/>
     <Container/>
     <ContainerDeal/>
     <Footer/>
    </div>
  );
}

export default App;
