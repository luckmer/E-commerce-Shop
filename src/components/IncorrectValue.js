import React from "react";
import { Container, SearchControl, Incorrect } from "../styles/CatalogStyles";

function IncorrectValue({ handleChange, search, correctMark, correctPrice }) {
    return (
        <Container>
            <SearchControl>
                <input
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
            <Incorrect>
                <div />
            </Incorrect>
        </Container>
    );
}

export default IncorrectValue;
