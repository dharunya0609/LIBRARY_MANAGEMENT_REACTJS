import Home from "./Components/Home";
import BookCart from "./Components/BookCart";
import AddStock from "./Components/AddStock";
import EditContact from "./Components/EditContact";

import {FiBookOpen} from "react-icons/fi";
import {FiBookmark} from "react-icons/fi";
import {FaShoppingCart} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar bg="secondary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"><FiBookOpen size={25}/>THE READER'S PLANET</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/bookCart"><FaShoppingCart size={25}/>ITEM_CART</Nav.Link>
                            <Nav.Link href="/addStock"><FiBookmark size={25}/>ADD_STOCK</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path="/"
                        element={<Home/>}></Route>
                    <Route exact path="/addStock"
                        element={<AddStock/>}></Route>
                    <Route exact path="/bookCart"
                        element={<BookCart/>}></Route>
                    <Route exact path="/EditContact/:contactId"
                        element={<EditContact/>}></Route>


                   

                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
