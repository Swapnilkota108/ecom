import { useState } from "react";



function ContainerImage(props) {
    return <div className="container-image">
        <img className="img" src={props.image} />
        <button className="btn"><span class="btn-text">{props.category}</span></button>
    </div>
}

function DealProduct(props) {
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
        {props.text} <i class="fa fa-clock"></i>{" "}
    </h3>
}

function ContainerButton(props) {

    return <>
        <button onClick={props.onLeftClick} className="container-btn-left btn-float"><span className="btn-text">❮</span></button>
        <button onClick={props.onRightClick} className="container-btn-right btn-float"><span className="btn-text">❯</span></button></>
}





function Container() {


    return <div className="container">
        <ContainerImage category="Men" image="https://lp2.hm.com/hmgoepprod?set=source[/94/81/94811f33a4c87f46f2296e9b5c69f3c7bfa73945.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" />

        <ContainerImage category="Women" image="https://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/66/29/40/70/06/1/6629407006_00_W220_H287.jpg?lastmodified=202109082246054" />

        <ContainerImage category="Kids" image="https://media.istockphoto.com/photos/cheeky-boy-smiling-picture-id465113506?b=1&k=20&m=465113506&s=170667a&w=0&h=SHLPIDxIKr5nhkET6PGW8E43hwoOzgckBCICs-13Y2o=" />

        <ContainerImage category="Beauty" image="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=" />

        <ContainerImage category="Living" image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80" />

    </div>


}




function ContainerDeal() {
    const [showButton, setShowButton] = useState(true);
    const [position, setPosition] = useState(0);

    function leftClick() {
        setPosition(() => position - 10);
        console.log(position);
    }

    console.log(position);

    function rightClick() {
        setPosition(() => position + 10);
        console.log(position);
    }
    return <div className="container-deal container">
        <ContainerHeader text="Best deals" />
        {showButton && <ContainerButton onLeftClick={leftClick} onRightClick={rightClick} />}

        <div className="deal-contents" style={{
            transform: `translateX(${position}rem)`
        }}>
            <DealProduct image="https://www.thechennaimobiles.com/image/cache/catalog/ip13pnk-600x600.jpg" label="Iphone11" category="Mobiles" />
            <DealProduct image="https://media.istockphoto.com/photos/fashion-brown-shoes-picture-id539817006?b=1&k=20&m=539817006&s=170667a&w=0&h=ZOORl-YJUWG8znIzW0Rz-Zsedn2vFod1EizZovKBnOg=" label="Yellow shoes" category="Shoes" />
            <DealProduct image="https://taskandpurpose.com/uploads/2021/01/15/best-mens-watches-1.jpg?auto=webp" label="Blue Watch" category="watches" />
            <DealProduct image="https://image.made-in-china.com/202f0j00rvcRkpftsmoU/Hot-Selling-Products-Anime-One-Piece-Action-Figures-Model-Toys.jpg" label="Figures" category="Anime" />
            <DealProduct image="https://i0.wp.com/devdevshow.com/wp-content/uploads/2020/10/eloquent-javascript.png" label="Programming" category="Books" />
            <DealProduct image="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw43f71652/2022/SP22/set_0215_global/Bags%20DGP/0215_DGP_Bag_backpack.jpg" label="Handbag" category="Bags" />
        </div>


    </div>
}





export { Container, ContainerDeal }