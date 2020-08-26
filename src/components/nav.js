import React, { useState, useEffect } from "react";
import { NavBar, Header, Menu, DivPage } from "../styles/NavBar";
import { Link } from "react-router-dom";

function Nav() {
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
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
            <Header state={state}>
                <DivPage>
                    <ul>
                        <Link to="/catalog">
                            <li>Catalog</li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/products">
                            <li>Products</li>
                        </Link>
                    </ul>
                </DivPage>
                <ul>
                    <Link to="/">
                        <li>Logo</li>
                    </Link>
                </ul>
                <DivPage>
                    <ul>
                        <Link to="/cart">
                            <li>Cart</li>
                        </Link>
                    </ul>
                </DivPage>
            </Header>
        </NavBar>
    );
}

export default Nav;
