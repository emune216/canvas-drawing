import React from "react";
import styled from "styled-components";

const List = () => {
  return (
    <ListWrapper>
      <span>List</span>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  background: blue;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 20%;
  }
  @media only screen and (min-width: 600px)  {
    width: 20%;
    height: 100%;
  }
`;

export default List;
