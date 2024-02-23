import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { icons } from "../icons";


const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0;
`;
const Content = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({theme}) => theme.text};
`;


const Task = ({text}) => {
    return(
        <Container>
            <IconButton icon={icons.check}/>
            <Content>{text}</Content>
            <IconButton icon={icons.check}/>
            <IconButton icon={icons.check}/>
        </Container>
    );
};

Task.PropTypes = {
    text: PropTypes.string.isRequired,
}

export default Task;