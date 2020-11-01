import React from "react";
import { Link } from "react-router-dom";
import { Container, ContextContainer, Box, Row, Section,} from "../styles/CartStyles";
import { useSelector, useDispatch } from "react-redux";

import { buy } from "../reducers/ContextSlice";

export default function Details({ match }){
    
    const { id } = match.params;
    
    const apiDataView = useSelector(state =>
        state.Context.fetchData.find(detail =>
            detail._id === id
        ),
    );

    const dispatch = useDispatch();

    const { _id, name, context, src, title, price } = apiDataView;

    return (
        <Container>
            <div>
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
                    <button onClick={() => dispatch((buy({id: _id})))}>
                        Buy
                    </button>
                </Section>
            </div>
        </Container>
    );
};
