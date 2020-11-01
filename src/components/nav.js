import React, { useState, useEffect } from "react";
import { NavBar, Header, Menu, DivPage } from "../styles/NavBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Nav() {
    
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(false);

    const NumberDate = useSelector(state => state.Context.cart)

    useEffect(() =>{
        window.addEventListener("scroll", () => {
        window.pageYOffset > 70 ? setScroll(true) : setScroll(false);
        });
    }, []);

    return (
        <NavBar style={{ background: scroll ? "white" : "" }}>
            <Menu state={state} onClick={() => setState(!state)}>
                <div />
                <div />
                <br />
            </Menu>
            <Header scroll={scroll} state={state}>
                <DivPage>
                    <ul onClick={() => setState(!state)}>
                        <Link to="/catalog">
                            <li>Catalog</li>
                        </Link>
                    </ul>
                    <ul onClick={() => setState(!state)}>
                        <Link to="/products">
                            <li>Products</li>
                        </Link>
                    </ul>
                </DivPage>
                <ul onClick={() => setState(!state)}>
                    <Link to="/">
                        <li>Shop</li>
                    </Link>
                </ul>
                <DivPage>
                    <ul onClick={() => setState(!state)}>
                        <Link to="/cart">
                            <li>
                                Cart <span> {NumberDate.length} </span>
                            </li>
                        </Link>
                    </ul>
                </DivPage>
            </Header>
        </NavBar>
    );
}

export default Nav;
