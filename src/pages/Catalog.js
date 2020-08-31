import React, { useContext, useState } from "react";
import { ContactPanel, PaginatingControl, Paginating } from "../Imports/index";
import { Container, Context, Div, Card, Page } from "../styles/CatalogStyles";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";

function Catalog() {
    const [page, setPage] = useState(1);
    const [LimitControl] = useState(9);
    const { DataControl } = useContext(DataContext);
    const { ContextView, paginate } = PaginatingControl({
        page,
        LimitControl,
        DataControl,
        setPage,
    });
    return (
        <Container>
            <Context>
                {ContextView.map((item, i) => (
                    <Div key={i}>
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
