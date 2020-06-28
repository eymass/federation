import React from 'react';
import Form from "./Form";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Main = () => {
    return (
        <Wrapper>
            <Form />
        </Wrapper>
    );
};

export default Main;
