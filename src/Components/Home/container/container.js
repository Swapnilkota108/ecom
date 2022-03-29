import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, imageArray } from "../../../backend/db/categories";
import { ContainerProducts, oneCategoryProducts, products } from "../../../backend/db/products";
import { Countdown } from "../countdown/countdown";


function ContainerCategory(props) {
    return <div className="container-image">
        <img className="img" src={props.image} />
        <button className="btn"><span class="btn-text">{props.category}</span></button>
    </div>
}

function ContainerButton(props) {

    return <>
        <button onClick={props.onshiftLeft} className="container-btn-left btn-float"><span className="btn-text">❮</span></button>
        <button onClick={props.onshiftRight} className="container-btn-right btn-float"><span className="btn-text">❯</span></button></>
}

function ImageContainer() {
    const [index, setIndex] = useState(2);
    const [translateX, setTranslateX] = useState(0);
    const [clicked, setClicked] = useState(false);

    function shiftRight() {
        setIndex(() => index > imageArray.length - 2 ? 0 : index + 1);
        setTranslateX(() => 100);
        setClicked(() => true);
    }

    function shiftLeft() {
        setIndex(() => index == 0 ? imageArray.length - 1 : index - 1);
        setTranslateX(() => 100);
        setClicked(() => true);
    }

    return <div className="img-container">
        <ContainerButton onshiftLeft={shiftLeft} onshiftRight={shiftRight} />
        <Link to="/products" >
            <img className="img-responsive" src={imageArray[index]} />
        </Link>
    </div>
}



function ProductDisplay(props) {
    return <div>
        <div className="container-card">
            <img className="img" src={props.image} alt="error" />
            <h3>{props.label}</h3>
            <p class="discounted-text">{props.discount}</p>
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
                return <ContainerCategory category={product.categoryName} image={product.image} />
            })
        }
    </div>
}


function ContainerDeal() {
    const [showButton, setShowButton] = useState(true);
    const [position, setPosition] = useState(0);

    function shiftLeft() {
        setPosition(() => position != 0 ? position + 10 : position);
    }

    function shiftRight() {
        setPosition(() => position - 10);
    }

    return <div className="container-deal container">
        <ContainerHeader text="Best deals" />

        {showButton && <ContainerButton onshiftLeft={shiftLeft} onshiftRight={shiftRight} />}

        <div className="product-content" style={{
            transform: `translateX(${position}rem)`
        }}>
            {ContainerProducts.map((product) => {
                return <ProductDisplay {...product} />
            })}
        </div>


    </div>
}

function OneCategoryProducts(props) {
    const [showButton, setShowButton] = useState(true);
    const [position, setPosition] = useState(0);


    function shiftLeft() {
        setPosition(() => position != 0 ? position + 10 : position);
    }

    function shiftRight() {
        setPosition(() => position - 10);
    }

    return <div className="container-deal container">
        <ContainerHeader text="Shoes offer" />
        {showButton && <ContainerButton onshiftLeft={shiftLeft} onshiftRight={shiftRight} />}
        <div className="product-content" style={{
            transform: `translateX(${position}rem)`
        }}>
            {oneCategoryProducts.map((product) => {
                return <ProductDisplay {...product} />
            }
            )}
        </div>
    </div>
}





export { Container, ContainerDeal, OneCategoryProducts, ImageContainer }