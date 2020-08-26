import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../data/Data";

function Details({ match }) {
    const [state, setState] = useState({ content: [] });
    const contextType = useContext(DataContext);
    const MapMe = state.content;

    useEffect(() => {
        const CorrectId = contextType.fetchData.filter(
            (el) => el._id === match.params.id
        );
        setState({ content: CorrectId });
    }, [contextType.fetchData, match.params.id]);

    return (
        <div>
            {MapMe.map(({ src, _id }) => (
                <div key={_id}>
                    <img src={src} alt={src} />
                </div>
            ))}
        </div>
    );
}

export default Details;
