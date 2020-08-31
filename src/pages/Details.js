import React, { useContext, useEffect, useState } from "react";
import {
    Container,
    ContextContainer,
    Box,
    Row,
    Section,
} from "../styles/CartStyles";
import { DataContext } from "../data/Data";
import { Link } from "react-router-dom";
function Details({ match }) {
    const [state, setState] = useState({ content: [] });
    const { DataControl, TableState, setTableState } = useContext(DataContext);

    useEffect(() => {
        const CorrectId = DataControl.fetchData.filter(
            (el) => el._id === match.params.id
        );
        setState({ content: CorrectId });
    }, [DataControl.fetchData, match.params.id]);

    const handleClick = (id) => {
        const { table } = TableState;
        const TableValue = table.every(({ _id }) => _id !== id);
        const Context = table.concat(DataControl.fetchData[id - 1]);
        if (TableValue) {
            setTableState({ table: [...Context] });
        } else return;
    };

    return (
        <Container>
            {state.content.map(
                ({ src, price, _id, context, title, name }, i) => (
                    <div key={i}>
                        <ContextContainer>
                            <img
                                src={src}
                                alt={src}
                                style={{ width: "50em" }}
                            />
                            <Box>
                                <header>{name}</header>
                                <hr />
                                <Row>
                                    <h2> {title}</h2>
                                    <span> ${price}</span>
                                </Row>
                                <p> {context}</p>
                                <hr />
                            </Box>
                        </ContextContainer>
                        <Section>
                            <Link to="/catalog">
                                <button>Continue</button>
                            </Link>
                            <button onClick={() => handleClick(_id)}>
                                Buy
                            </button>
                        </Section>
                    </div>
                )
            )}
        </Container>
    );
}

export default Details;
