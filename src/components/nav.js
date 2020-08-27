import React, { useState, useEffect, useContext } from "react";
import { NavBar, Header, Menu, DivPage } from "../styles/NavBar";
import { Link } from "react-router-dom";
import { DataContext } from "../data/Data";
function Nav() {
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(false);
    const { DataControl } = useContext(DataContext);
    const Length = DataControl.table.length;
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
            <Header scroll={scroll} state={state}>
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
                            <li>Cart {Length} </li>
                        </Link>
                    </ul>
                </DivPage>
            </Header>
        </NavBar>
    );
}

export default Nav;
