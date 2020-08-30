import React, { useContext, useEffect, useState } from "react";
import { Container, IMG, ContextView, Div } from "../styles/DetailsStyle";
import { DataContext } from "../data/Data";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Details({ match }) {
    const [state, setState] = useState({ content: [] });
    const { DataControl, handleClick } = useContext(DataContext);

    useEffect(() => {
        const CorrectId = DataControl.fetchData.filter(
            (el) => el._id === match.params.id
        );
        setState({ content: CorrectId });
    }, [DataControl.fetchData, match.params.id]);

    return (
        <>
            {state.content.map(({ src, _id, context, name }) => (
                <Container key={_id}>
                    <IMG>
                        <img src={src} alt={src} />
                    </IMG>
                    <ContextView>
                        <header>{name}</header>
                        <hr />
                        <p>{context}</p>
                        <Div>
                            <Link to="/catalog">
                                <button>Back</button>
                            </Link>
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
