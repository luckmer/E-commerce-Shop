import React, { useState, useEffect, useContext } from "react";
import { NavBar, Header, Menu, DivPage } from "../styles/NavBar";
import { Link } from "react-router-dom";
import { DataContext } from "../utils/Data";

function Nav() {
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(false);
    const {
        store: {
            DATA: [TableState],
        },
    } = useContext(DataContext);

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
                                Cart <span> {TableState.table.length}</span>
                            </li>
                        </Link>
                    </ul>
                </DivPage>
            </Header>
        </NavBar>
    );
}

export default Nav;
