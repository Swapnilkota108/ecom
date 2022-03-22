import "./App.css";
import { Navbar } from "./Components/Home/navigation";
import { Footer } from "./Components/Home/footer/footer";
import { LogIn } from "./Components/login/login";
import { Container, ContainerDeal, ProductsContainer, ImageContainer } from "./Components/Home/container/container";
import { BrowserRouter, Link, Route, Routes, routes } from "react-router-dom";
import React from "react";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { products } from "./backend/db/products";
import { categories } from "./backend/db/categories";

function Home(){
  return <>  
      <ImageContainer />
      <Container />
      <ContainerDeal />
      <ProductsContainer />
      <Footer/>
  </>
}

function GiftboxSection(){
   return <div className="gifts-section">
     <h1>Oops!! It seems like you have not logged in.</h1>
     <LogIn/>
     </div>
   
}


function App() {
  return (
  
    <div className="App">
     <Navbar /> 
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/giftbox" element={<GiftboxSection/>}/>
      </Routes>
    </div>

  );
}


export default App;

