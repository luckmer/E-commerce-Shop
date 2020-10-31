import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../utils/Data";
import { Link } from "react-router-dom";
import {
    Container,
    ContextContainer,
    Box,
    Row,
    Section,
} from "../styles/CartStyles";

function Details({ match }) {
    const [state, setState] = useState({ content: [] });

    const { store: {
        DataControl,
        handleClick
    } } = useContext(DataContext)

    useEffect(() => {
        const CorrectId = DataControl.fetchData.filter(
            (el) => el._id === match.params.id
        );
        setState({ content: CorrectId });
    }, [DataControl.fetchData, match.params.id]);

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
