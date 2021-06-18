import React from "react";
import styled from "styled-components";

const List = () => {
  return (
    <Wrapper>
      <ListWrapper>
      </ListWrapper>
    </Wrapper>
  );
};

const ListWrapper = styled.div`
  height: -webkit-fill-available;
  margin: 2rem;
  border: 1px solid black;
  overflow-y: scroll;

  @media only screen and (max-width: 600px)  {
    height: inherit;
    margin: 1rem;
    margin-top: 3rem;
  }
`;

const Wrapper = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
  @media only screen and (min-width: 600px)  {
    width: 30%;
    height: 100%;
  }
`;

export default List;
