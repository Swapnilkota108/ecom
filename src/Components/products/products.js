import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.production.min";
import { products } from "../../backend/db/products";

let categoryArray = [" Men", " Women", " Kids"];
let pricesSort = [" Low to high", " High to Low"];
let deliveryTypes = [" Fast delivery only", " Include out of stock"];
let rating = [" 5 ★", " 4 ★ and above", " 3 ★ and above", " 2 ★ and above", " 1 ★ and above"];

function InputCheck(props) {

    return <div className="input">
        <input type={props.type} name={props.name} />
        <label>{props.label}</label>
    </div>
}



function CatergoryFilter() {


    return <div className="category-filter ul-list">
        <h1>Gender</h1>
        {categoryArray.map((category) => <InputCheck type={"checkbox"} label={category} />)}
    </div>
}

function PriceFilter() {
    return <div className="price-filter">
        <h1></h1>
    
    </div>
}

function PricesSort() {

    return <div className="input ul-list">
        <h1>Price - sort by</h1>
        {pricesSort.map((type) => <InputCheck type={"radio"} name={"price"} label={type} />)}
    </div>
}


function RatingSort() {

    return <div className="rating-sort ul-list">
        <h1>Ratings</h1>
        {rating.map((type) => <InputCheck type={"checkbox"} label={type} />)}
    </div>
}

function DeliveryFilter() {

    return <div className="ul-list">
        <h1>Delivery</h1>

        {deliveryTypes.map((type) => <InputCheck type={"checkbox"} label={type} />)}
    </div>
}





function Aside() {

    return <aside className="drawer">
        <h2>Filters</h2>
        <CatergoryFilter />
        <PriceFilter />
        <PricesSort />
        <DeliveryFilter />
        <RatingSort />
    </aside>
}

function Card(props) {
    return <div className="card-product">
        <img src={props.image} alt="error" />
        <div className="middle-section">
            <strong className="product-brand">{props.brand}</strong>
            <h1>{props.label}</h1>
            <p>₹{props.price}</p>
        </div>
        <div className="last-section">
            <button className="btn">Add to cart</button>
            <button className="btn">Buy now</button>
        </div>
    </div>
}


function ProductContainer() {


    return <div className="products-container">
    {products.map((product)=>
          <Card label={product.label} image={product.image} brand={product.brand} price={product.price}/>
        ) }
    </div>
}







export function ProductsPage() {



    return <div className="product-page">
        <Aside />
        <ProductContainer />
    </div>
}


