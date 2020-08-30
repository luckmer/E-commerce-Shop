import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../data/Data";
import ContactPanel from "../components/Contact";
import { Link } from "react-router-dom";
const Container = styled.div`
    padding: 15vh 0 0 0;
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        " . controlPanel  context context context context . "
        " . controlPanel  context  context context  context . "
        " . controlPanel  context  context context context .  "
        "contact contact contact contact contact contact contact";
`;

const Context = styled.div`
    padding: 2px 2px 2px;
    width: 100%;
    height: 100%;
    grid-area: context;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`;
const Div = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`;
const Card = styled.div`
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    img {
        border-radius: 5px;
        max-width: 400px;
        min-width: 290px;
        height: 600px;
        display: block;
        object-fit: cover;
    }
`;
const FilterPanel = styled.div`
    background-color: black;
    width: 100%;
    height: 50vh;
    grid-area: controlPanel;
`;
function Catalog() {
    const { DataControl } = useContext(DataContext);
    return (
        <Container>
            <FilterPanel></FilterPanel>
            <Context>
                {DataControl.fetchData.map((item, i) => (
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
        </Container>
    );
}

export default Catalog;
