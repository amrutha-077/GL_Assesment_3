import React from "react";
import { Routes,Route, BrowserRouter} from "react-router-dom";
import Navbar from './components/navbar';
import Main from "./components/main";
import Home from './components/home';
import Book from './components/book'
// import Admin from './components/admin';
import List from './components/customer';
import './app.css'
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="main" element={<Main></Main>}></Route>
        <Route path="customer" element={<List></List>}></Route>
        <Route path='book' element={<Book></Book>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    )
    
}

export default App