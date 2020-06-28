import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const FormWrapper = styled.div`
    display: flex;
    background-color: #fff;
    align-items: center;
    padding: 10px;
    justify-content: center;
    flex-direction: column;
`;

const Form = () => {
    return (
        <FormWrapper>
            <TextField id="standard-basic" label="Name" />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField id="outlined-basic" label="Phone" variant="outlined" />
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </FormWrapper>
    );
};

export default Form;
