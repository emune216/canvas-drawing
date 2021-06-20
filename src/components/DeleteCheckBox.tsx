import React from "react";
import styled from "styled-components";

import Wrapper from "./styles/elements/Wrapper";

import useCheckBox from "../hooks/useCheckBox";

const DeleteCheckBox = () => {
  const { checkBoxValue, handleChange } = useCheckBox();

  return (
    <Wrapper>
      <Label>
        <Input
          type="checkbox"
          checked={checkBoxValue}
          onChange={handleChange}
          aria-label="delete-check-box"
        />
        <span>Delete Mode</span>
      </Label>
    </Wrapper>
  );
};

const Label = styled.label`
  position: relative;
  top: -0.25rem;
  cursor: pointer;

  span {
    margin-left: 0.6rem;
  }

  @media only screen and (max-width: 600px)  {
    span {
      margin-left: 0.3rem;
    }
  }
`;

const Input = styled.input`
  position: relative;
  top: 0.4rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  @media only screen and (max-width: 600px)  {
    width: 1rem;
    height: 1rem;
    top: 0.2rem;
  }
`;

export default DeleteCheckBox;
