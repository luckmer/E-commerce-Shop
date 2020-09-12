import React, { useContext, useState } from "react";
import {
    Contact,
    PaginatingControl,
    Paginating,
    FilterEffect,
} from "../Imports/index";
import {
    Container,
    Context,
    SearchControl,
    Div,
    Card,
    Page,
    Hide,
    DivHide,
    Incorrect,
} from "../styles/CatalogStyles";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";

function Catalog() {
    const [page, setPage] = useState(1);
    const [LimitControl] = useState(9);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const { DataControl, handleClick } = useContext(DataContext);
    const { ContextView, paginate } = PaginatingControl({
        page,
        LimitControl,
        setPage,
        filteredData,
    });

    const content = DataControl.fetchData;

    FilterEffect(content, search, setFilteredData);

    if (filteredData <= 0) {
        return (
            <Container>
                <SearchControl>
                    <input
                        placeholder="search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </SearchControl>
                <Incorrect>
                    <div />
                </Incorrect>
            </Container>
        );
    }

    return (
        <Container>
            <SearchControl page={page}>
                <input
                    placeholder="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </SearchControl>
            <Context>
                {ContextView.map(({ src, _id, name }, i) => (
                    <Div key={i}>
                        <Card>
                            <header>{name}</header>
                            <Hide>
                                <img src={src} alt={src} />
                                <DivHide>
                                    <Link to={`${_id}`}>
                                        <button>Details</button>
                                    </Link>
                                    <button onClick={() => handleClick(_id)}>
                                        Buy
                                    </button>
                                </DivHide>
                            </Hide>
                        </Card>
                    </Div>
                ))}
            </Context>
            <Contact />
            <Page>
                <Paginating
                    paginate={paginate}
                    LimitControl={LimitControl}
                    totalPosts={filteredData.length}
                />
            </Page>
        </Container>
    );
}

export default Catalog;
