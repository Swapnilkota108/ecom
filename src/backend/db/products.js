import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    label: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    label: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    label: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
  {
    _id:uuid(),
    label: "Tshirts",
    discount:"20% off",
    image:"https://lp2.hm.com/hmgoepprod?set=source[/94/81/94811f33a4c87f46f2296e9b5c69f3c7bfa73945.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
  }
];


export const ContainerProducts = [
  {
    _id: uuid(),
    label: "Iphone 11",
    discount: "20% off",
    category:"Mobiles",
    image:"https://www.thechennaimobiles.com/image/cache/catalog/ip13pnk-600x600.jpg"
  },
  {
    _id: uuid(),
    label: "Yellow shoes",
    discount: "20% off",
    category:"shoes",
    image:"https://media.istockphoto.com/photos/canvas-shoes-picture-id171224469?b=1&k=20&m=171224469&s=170667a&w=0&h=p4vsbDzFBBYkvETlSc1OHpp6fgZpHOLbmWx_tS5aI2c="
  },
  {
    _id: uuid(),
    label: "Blue Watch",
    discount: "20% off",
    category:"Watch",
    image:"https://taskandpurpose.com/uploads/2021/01/15/best-mens-watches-1.jpg?auto=webp"
  },
  {
    _id: uuid(),
    label: "Figures",
    discount: "20% off",
    category:"Anime",
    image:"https://image.made-in-china.com/202f0j00rvcRkpftsmoU/Hot-Selling-Products-Anime-One-Piece-Action-Figures-Model-Toys.jpg"
  },
  {
    _id: uuid(),
    label: "Programming",
    discount: "20% off",
    category:"Books",
    image:"https://i0.wp.com/devdevshow.com/wp-content/uploads/2020/10/eloquent-javascript.png"
  },
  {
    _id: uuid(),
    label: "HandBags",
    discount: "20% off",
    category:"Bags",
    image:"https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw43f71652/2022/SP22/set_0215_global/Bags%20DGP/0215_DGP_Bag_backpack.jpg"
  },
]

export const oneCategoryProducts = [
  {
    _id: uuid(),
    label: "Black Shoes",
    discount:"10% off",
    category:"Shoes",
    image:"https://media.istockphoto.com/photos/elegant-black-leather-shoes-picture-id172417586?k=20&m=172417586&s=612x612&w=0&h=DDjvQhRgSYcH2F5rVt8iohGvkqCIteYuTCq3wpJuUi4="
  },
  {
    _id: uuid(),
    label: "Brown Shoes",
    discount:"10% off",
    category:"Shoes",
    image:"https://media.istockphoto.com/photos/fashion-brown-shoes-picture-id539817006?b=1&k=20&m=539817006&s=170667a&w=0&h=ZOORl-YJUWG8znIzW0Rz-Zsedn2vFod1EizZovKBnOg="
  },
  {
    _id: uuid(),
    label: "Formal Shoes",
    discount:"10% off",
    category:"Shoes",
    image:"https://media.istockphoto.com/photos/brown-leather-shoes-picture-id171253262?b=1&k=20&m=171253262&s=170667a&w=0&h=2ZEDxTQRbtPeaK-F0B7tqYq3QiGDzCKLxOrPb5_TH58="
  },
  {
    _id: uuid(),
    label: "Black Shoes",
    discount:"10% off",
    category:"Shoes",
    image:"https://rukminim1.flixcart.com/image/300/300/k6mibgw0/shoe/u/v/2/4330908-41-nike-black-original-imafpferdrygemuc.jpeg?q=70"
  },
  {
    _id: uuid(),
    label: "Red Shoes",
    discount:"10% off",
    category:"Shoes",
    image:"https://5.imimg.com/data5/YT/VL/MY-28971708/multicolor-mens-running-shoe-500x500.jpg"
  },
  {
    _id: uuid(),
    label: "White Shoes",
    discount:"10% off",
    category:"Shoes",
    image:"https://5.imimg.com/data5/BJ/PX/MY-35581878/adidas-vermont-white-running-shoes-500x500.png"
  },
]