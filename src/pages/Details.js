import React, { useContext, useEffect, useState } from "react";
import { Container, IMG, ContextView, Div } from "../styles/DetailsStyle";
import { DataContext } from "../data/Data";
import PropTypes from "prop-types";

function Details({ match }) {
    const [state, setState] = useState({ content: [] });
    const contextType = useContext(DataContext);
    console.log(contextType);
    const Table = contextType.DataControl.table;

    useEffect(() => {
        const CorrectId = contextType.DataControl.fetchData.filter(
            (el) => el._id === match.params.id
        );
        setState({ content: CorrectId });
    }, [contextType.DataControl.fetchData, match.params.id]);

    const handleClick = () => {
        Table.push(...state.content);
    };

    return (
        <>
            {state.content.map(({ src, _id, context }) => (
                <Container key={_id}>
                    <IMG>
                        <img src={src} alt={src} />
                    </IMG>
                    <ContextView>
                        <p>{context}</p>
                        <Div>
                            <button onClick={() => handleClick(_id)}>
                                Buy
                            </button>
                        </Div>
                    </ContextView>
                </Container>
            ))}
        </>
    );
}

Details.propTypes = {
    context: PropTypes.string,
    _id: PropTypes.number,
};

export default Details;
