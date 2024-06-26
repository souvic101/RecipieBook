import React from "react";
import Home from "./Home";
import Category from "../components/Category";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom"
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipie from "./Recipie";
import { AnimatePresence } from "framer-motion";
function Pages() {
    const location=useLocation();
    return (
        
        <AnimatePresence mode="wait"> 

            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cuisine/:type" element={<Cuisine />}></Route>
                <Route path="/searched/:search" element={<Searched />}></Route>
                <Route path="/recipie/:name" element={<Recipie />}></Route>
            </Routes>
        </AnimatePresence>


    )
}
export default Pages;