import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: 1,
    label: "Ipad mini (6th gen)",
    brand: "Apple",
    price: 50000,
    image: "https://skimages.netlify.app/images/ipad-mini-select-wifi-starlight-202109_FMT_WHH.png"
  },
  {
    _id: 2,
    label: "Black shoes",
    brand: "Nike",
    price: 5000,
    image: "https://rukminim1.flixcart.com/image/300/300/k6mibgw0/shoe/u/v/2/4330908-41-nike-black-original-imafpferdrygemuc.jpeg?q=70"
  },
  {
    _id: 3,
    label: "Yellow shoes",
    brand:"Yellow",
    price:2000,
    image: "https://skimages.netlify.app/images/yellow-shoes.jpg"
  },
  {
    _id:4,
    label:"Women T-shirt",
    brand:"Puma",
    price:3000,
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/671501/01/mod01/fnd/IND/fmt/png/Modern-Basic-Crew-Women's-Sweat-Shirt"
  },
  {
    _id:5,
    label:"Orange T-shirt",
    brand:"None",
    price:1599,
    image:"https://skimages.netlify.app/images/hmgoepprod.jpg"
  },
  {
    _id:6,
    label:"Black shoes",
    brand:"Black",
    price:1299,
    image:"https://media.istockphoto.com/photos/elegant-black-leather-shoes-picture-id172417586?k=20&m=172417586&s=612x612&w=0&h=DDjvQhRgSYcH2F5rVt8iohGvkqCIteYuTCq3wpJuUi4="
  },
  {
    _id:7,
    label:"Blue watch",
    brand:"Bolex",
    price:2299,
    image:"https://taskandpurpose.com/uploads/2021/01/15/best-mens-watches-1.jpg?auto=webp"
  },
  {
    _id:8,
    label:"Sofa",
    brand:"Vimile",
    price:35000,
    image:"https://skimages.netlify.app/images/photo-1586023492125-27b2c045efd7.avif"
  },
  // {
  //   _id:,
  //   label:,
  //   brand:,
  //   price:
  // },
  // {
  //   _id:,
  //   label:,
  //   brand:,
  //   price:
  // },
  // {
  //   _id:,
  //   label:,
  //   brand:,
  //   price:
  // },
  // {
  //   _id:,
  //   label:,
  //   brand:,
  //   price:
  // },
  // {
  //   _id:,
  //   label:,
  //   brand:,
  //   price:
  // },
  // {
  //   _id:,
  //   label:,
  //   brand:,
  //   price:
  // },
  // {
  //   _id:,
  //   label:,
  //   brand:,
  //   price:
  // }
];


export const ContainerProducts = [
  {
    _id: uuid(),
    label: "Iphone 11",
    discount: "20% off",
    category: "Mobiles",
    image: "https://www.thechennaimobiles.com/image/cache/catalog/ip13pnk-600x600.jpg"
  },
  {
    _id: uuid(),
    label: "Yellow shoes",
    discount: "20% off",
    category: "shoes",
    image: "https://media.istockphoto.com/photos/canvas-shoes-picture-id171224469?b=1&k=20&m=171224469&s=170667a&w=0&h=p4vsbDzFBBYkvETlSc1OHpp6fgZpHOLbmWx_tS5aI2c="
  },
  {
    _id: uuid(),
    label: "Blue Watch",
    discount: "20% off",
    category: "Watch",
    image: "https://taskandpurpose.com/uploads/2021/01/15/best-mens-watches-1.jpg?auto=webp"
  },
  {
    _id: uuid(),
    label: "Figures",
    discount: "20% off",
    category: "Anime",
    image: "https://image.made-in-china.com/202f0j00rvcRkpftsmoU/Hot-Selling-Products-Anime-One-Piece-Action-Figures-Model-Toys.jpg"
  },
  {
    _id: uuid(),
    label: "Programming",
    discount: "20% off",
    category: "Books",
    image: "https://i0.wp.com/devdevshow.com/wp-content/uploads/2020/10/eloquent-javascript.png"
  },
  {
    _id: uuid(),
    label: "HandBags",
    discount: "20% off",
    category: "Bags",
    image: "https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw43f71652/2022/SP22/set_0215_global/Bags%20DGP/0215_DGP_Bag_backpack.jpg"
  },
]

export const oneCategoryProducts = [
  {
    _id: uuid(),
    label: "Black Shoes",
    discount: "10% off",
    category: "Shoes",
    image: "https://media.istockphoto.com/photos/elegant-black-leather-shoes-picture-id172417586?k=20&m=172417586&s=612x612&w=0&h=DDjvQhRgSYcH2F5rVt8iohGvkqCIteYuTCq3wpJuUi4="
  },
  {
    _id: uuid(),
    label: "Brown Shoes",
    discount: "10% off",
    category: "Shoes",
    image: "https://media.istockphoto.com/photos/fashion-brown-shoes-picture-id539817006?b=1&k=20&m=539817006&s=170667a&w=0&h=ZOORl-YJUWG8znIzW0Rz-Zsedn2vFod1EizZovKBnOg="
  },
  {
    _id: uuid(),
    label: "Formal Shoes",
    discount: "10% off",
    category: "Shoes",
    image: "https://media.istockphoto.com/photos/brown-leather-shoes-picture-id171253262?b=1&k=20&m=171253262&s=170667a&w=0&h=2ZEDxTQRbtPeaK-F0B7tqYq3QiGDzCKLxOrPb5_TH58="
  },
  {
    _id: uuid(),
    label: "Black Shoes",
    discount: "10% off",
    category: "Shoes",
    image: "https://rukminim1.flixcart.com/image/300/300/k6mibgw0/shoe/u/v/2/4330908-41-nike-black-original-imafpferdrygemuc.jpeg?q=70"
  },
  {
    _id: uuid(),
    label: "Red Shoes",
    discount: "10% off",
    category: "Shoes",
    image: "https://5.imimg.com/data5/YT/VL/MY-28971708/multicolor-mens-running-shoe-500x500.jpg"
  },
  {
    _id: uuid(),
    label: "White Shoes",
    discount: "10% off",
    category: "Shoes",
    image: "https://5.imimg.com/data5/BJ/PX/MY-35581878/adidas-vermont-white-running-shoes-500x500.png"
  },
]