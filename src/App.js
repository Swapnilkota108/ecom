import { ProductsPage } from "./Components/products/products";
import { Navbar, SearchContainer, Footer, LogIn, Container, ContainerDeal, ImageContainer, OneCategoryProducts, React, dom, products, categories, Route, Routes, GiftboxSection } from "./imports"




function Home() {
  return <>
    <ImageContainer />
    <Container />
    <ContainerDeal />
    <OneCategoryProducts />

  </>
}

function PageRoutes() {

  return <Routes className="App">
    <Route path="/" element={<Home />} />
    <Route path="/giftbox" element={<GiftboxSection />} />
    <Route path="/products" element={<ProductsPage />} />
  </Routes>
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchContainer />
      <PageRoutes />
      <Footer />
    </div>

  );
}

export default App;

