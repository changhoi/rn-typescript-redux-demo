import { Detail, Meal } from "@receipe/redux-store";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";


interface Props{
    detail: Detail
}

export default (props: Props) => {
    const {detail} = props;

    return (
        <DetailWrapper>
            <MealImage 
            source = {{
                uri: detail.thumbnail
            }}/>
        <MealName>
            <NameText>{detail.name}</NameText>
        </MealName>

        <MealInstruction>
            <InstructionText>{detail.instruction}</InstructionText>
        </MealInstruction>

        </DetailWrapper>
    )
}

const DetailWrapper = styled.View`
    width: 100%;
`;

const MealImage = styled.Image`
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    height: 200px;
`;

const MealName = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const NameText = styled.Text`
    color: black;
    font-size : 50px;
    font-weight: bold;
`;

const InstructionText = styled.Text`
    color: black;
    font-size : 20px;
    font-weight: bold;
`;

const MealInstruction = styled.Text`
    font-size: 5px;
    justify-content: space-around;
    align-items: center;
`;