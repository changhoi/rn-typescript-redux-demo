import { Meal } from "@receipe/redux-store";
import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

interface Props {
  list: Array<Meal>;
  onClickMeal: (id: number) => () => void;
}

export default (props: Props) => {
  const { list, onClickMeal } = props;
  return (
    <TableWrapper>
      <Row disabled>
        <IdColumn>
          <Text>ID</Text>
        </IdColumn>
        <NameColumn>
          <Text>이름</Text>
        </NameColumn>
        <CategoryColumn>
          <Text>카테고리</Text>
        </CategoryColumn>
      </Row>
      {list.map((meal) => (
        <Row onPress={onClickMeal(meal.id)}>
          <IdColumn>
            <Text>{meal.id}</Text>
          </IdColumn>
          <NameColumn>
            <Text>{meal.name}</Text>
          </NameColumn>
          <CategoryColumn>
            <Text>{meal.category}</Text>
          </CategoryColumn>
        </Row>
      ))}
    </TableWrapper>
  );
};

// div

const TableWrapper = styled.View`
  width: 100%;
`;

const Row = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

const IdColumn = styled.View`
  flex: 0.5;
`;

const NameColumn = styled.View`
  flex: 3;
`;

const CategoryColumn = styled.View`
  flex: 1;
`;
