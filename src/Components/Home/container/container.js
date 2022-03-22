import { useState } from "react";
import { categories } from "../../../backend/db/categories";
import { products } from "../../../backend/db/products";

function ContainerCategory(props) {
    return <div className="container-image">
        <img className="img" src={props.image} />
        <button className="btn"><span class="btn-text">{props.category}</span></button>
    </div>
}

function ContainerButton(props) {

    return <>
        <button onClick={props.onLeftClick} className="container-btn-left btn-float"><span className="btn-text">❮</span></button>
        <button onClick={props.onRightClick} className="container-btn-right btn-float"><span className="btn-text">❯</span></button></>
}

function ImageContainer() {
    function rightClick() {

    }

    function leftClick() {

    }

    return <div className="img-container">
        {/* <img className="img-responsive" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/WIN_22/BOB/evergreen/traffic/bob_pdp_sobe_hero.jpg" /> */}
        <ContainerButton onLeftClick={leftClick} onRightClick={rightClick} />
        <img className="img-responsive" src="https://swapnil-tic-tac-toe.netlify.app/2.png"/>
    </div>
}

function ProductDisplay(props) {
    return <div>

        <div className="container-card">
            <img className="img" src={props.image} alt="error" />
            <h3>{props.label}</h3>
            <p class="discounted-text">20% off.</p>
            <p>{props.category}</p>
        </div>
    </div>
}

function ContainerHeader(props) {
    return <h3 className="container-header">
        {props.text}{" "}
    </h3>
}


function Container() {


    return <div className="container">
        {
            categories.map((product) => {
                return <ContainerCategory category = {product.categoryName} image = {product.image}/>
            })
        }
    </div>
}


function ContainerDeal() {
    const [showButton, setShowButton] = useState(true);
    const [position, setPosition] = useState(0);

    function leftClick() {
        setPosition(() => position != 0 ? position + 10 : position);
    }

    function rightClick() {
        setPosition(() => position - 10);
    }

    return <div className="container-deal container">
        <ContainerHeader text="Best deals" />
        {showButton && <ContainerButton onLeftClick={leftClick} onRightClick={rightClick} />}

        <div className="product-content" style={{
            transform: `translateX(${position}rem)`
        }}>
            <ProductDisplay image="https://www.thechennaimobiles.com/image/cache/catalog/ip13pnk-600x600.jpg" label="Iphone11" category="Mobiles" />
            <ProductDisplay image="https://media.istockphoto.com/photos/canvas-shoes-picture-id171224469?b=1&k=20&m=171224469&s=170667a&w=0&h=p4vsbDzFBBYkvETlSc1OHpp6fgZpHOLbmWx_tS5aI2c=" label="Yellow shoes" category="Shoes" />
            <ProductDisplay image="https://taskandpurpose.com/uploads/2021/01/15/best-mens-watches-1.jpg?auto=webp" label="Blue Watch" category="watches" />
            <ProductDisplay image="https://image.made-in-china.com/202f0j00rvcRkpftsmoU/Hot-Selling-Products-Anime-One-Piece-Action-Figures-Model-Toys.jpg" label="Figures" category="Anime" />
            <ProductDisplay image="https://i0.wp.com/devdevshow.com/wp-content/uploads/2020/10/eloquent-javascript.png" label="Programming" category="Books" />
            <ProductDisplay image="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw43f71652/2022/SP22/set_0215_global/Bags%20DGP/0215_DGP_Bag_backpack.jpg" label="Handbag" category="Bags" />
        </div>


    </div>
}

function ProductsContainer(props) {
    const [showButton, setShowButton] = useState(true);
    const [position, setPosition] = useState(0);


    function leftClick() {
        setPosition(() => position != 0 ? position + 10 : position);
    }

    function rightClick() {
        setPosition(() => position - 10);
    }

    return <div className="products-container container-deal container">
        <ContainerHeader text="Shoes offer" />
        {showButton && <ContainerButton onLeftClick={leftClick} onRightClick={rightClick} />}
        <div className="product-content" style={{
            transform: `translateX(${position}rem)`
        }}>
            <ProductDisplay image="https://media.istockphoto.com/photos/elegant-black-leather-shoes-picture-id172417586?k=20&m=172417586&s=612x612&w=0&h=DDjvQhRgSYcH2F5rVt8iohGvkqCIteYuTCq3wpJuUi4=" label="Black Shoes" category="Shoes" />
            <ProductDisplay image="https://media.istockphoto.com/photos/fashion-brown-shoes-picture-id539817006?b=1&k=20&m=539817006&s=170667a&w=0&h=ZOORl-YJUWG8znIzW0Rz-Zsedn2vFod1EizZovKBnOg=" label="Yellow shoes" category="Shoes" />
            <ProductDisplay image="https://media.istockphoto.com/photos/brown-leather-shoes-picture-id171253262?b=1&k=20&m=171253262&s=170667a&w=0&h=2ZEDxTQRbtPeaK-F0B7tqYq3QiGDzCKLxOrPb5_TH58=" label="Blue Watch" category="Shoes" />
            <ProductDisplay image="https://rukminim1.flixcart.com/image/300/300/k6mibgw0/shoe/u/v/2/4330908-41-nike-black-original-imafpferdrygemuc.jpeg?q=70" label="Figures" category="Shoes" />
            <ProductDisplay image="https://5.imimg.com/data5/YT/VL/MY-28971708/multicolor-mens-running-shoe-500x500.jpg" label="Programming" category="Shoes" />
            <ProductDisplay image="https://5.imimg.com/data5/BJ/PX/MY-35581878/adidas-vermont-white-running-shoes-500x500.png" label="Handbag" category="Shoes" />
        </div>
    </div>
}

export { Container, ContainerDeal, ProductsContainer, ImageContainer }