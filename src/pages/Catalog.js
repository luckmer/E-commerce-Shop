import React, { useContext, useState } from "react";
import { ContactPanel, PaginatingControl, Paginating } from "../Imports/index";
import {
    Container,
    FilterPanel,
    Context,
    Div,
    Card,
    Page,
} from "../styles/CatalogStyles";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";

function Catalog() {
    const [page, setPage] = useState(1);
    const [LimitControl] = useState(9);
    const { DataControl } = useContext(DataContext);
    const [filter, setFilter] = useState("");
    const { ContextView, paginate } = PaginatingControl({
        page,
        LimitControl,
        DataControl,
        setPage,
    });
    console.log(filter);
    return (
        <Container>
            <FilterPanel>
                <div>
                    <input
                        type="text"
                        placeholder="search"
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
            </FilterPanel>
            <Context>
                {ContextView.map((item) => (
                    <Div key={item._id}>
                        <Card>
                            <Link to={`${item._id}`}>
                                <img src={item.src} alt={item.src} />
                            </Link>
                        </Card>
                    </Div>
                ))}
            </Context>

            <ContactPanel />
            <Page>
                <Paginating
                    paginate={paginate}
                    LimitControl={LimitControl}
                    totalPosts={DataControl.fetchData.length}
                />
            </Page>
        </Container>
    );
}

export default Catalog;
