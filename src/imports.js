import "./App.css";
import { Navbar, SearchContainer } from "./Components/Home/navigation/navigation";
import { Footer } from "./Components/Home/footer/footer";
import { LogIn } from "./Components/login/login";
import { Container, ContainerDeal, ImageContainer, OneCategoryProducts } from "./Components/Home/container/container";
import React from "react";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { products } from "./backend/db/products";
import { categories } from "./backend/db/categories";
import { Route, Routes } from "react-router-dom";
import { GiftboxSection } from "./Components/giftbox/giftbox";


export { Navbar, SearchContainer, Footer, LogIn, Container, ContainerDeal, ImageContainer, OneCategoryProducts, React, dom, products, categories, Route, Routes, GiftboxSection}