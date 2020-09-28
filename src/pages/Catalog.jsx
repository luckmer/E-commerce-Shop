import React, { useContext, useState } from "react";
import {
    Contact,
    PaginatingControl,
    Paginating,
    FilterEffect,
    IncorrectValue,
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
} from "../styles/CatalogStyles";
import { DataContext } from "../utils/Data";
import { Link } from "react-router-dom";

function Catalog() {
    const [page, setPage] = useState(1);
    const [LimitControl] = useState(9);
    const [search, setSearch] = useState({
        filterInput: "",
        filterMark: "",
        filterPrice: "",
    });
    const [filteredData, setFilteredData] = useState([]);
    const { handleClick } = useContext(DataContext);
    const { ContextView, paginate } = PaginatingControl({
        page,
        LimitControl,
        setPage,
        filteredData,
    });
    FilterEffect(search, setFilteredData);

    const price = ContextView.map(({ price }) => price);
    const mark = ContextView.map(({ type }) => type);

    const correctPrice = [...new Set(price)];
    const correctMark = [...new Set(mark)];
    const handleChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    if (filteredData <= 0) {
        return IncorrectValue({
            handleChange,
            search,
            correctMark,
            correctPrice,
        });
    }

    return (
        <Container>
            <SearchControl page={page}>
                <input
                    placeholder="search"
                    type="text"
                    name="filterInput"
                    value={search.filterInput}
                    onChange={handleChange}
                />
                <select
                    name="filterMark"
                    value={search.filterMark}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {correctMark.map((item, i) => (
                        <option key={i}>{item}</option>
                    ))}
                </select>
                <select
                    name="filterPrice"
                    value={search.filterPrice}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {correctPrice.map((item, i) => (
                        <option key={i}>{item}</option>
                    ))}
                </select>
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
