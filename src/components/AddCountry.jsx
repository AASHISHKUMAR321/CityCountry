import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "../redux/actions";
import styled from "styled-components";

const CityDiv = styled.div`
  input {
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
`;

export const AddCountry = () => {
  const [country, setCountry] = useState({
    Country: "",
  });
  const inputHandler = (e) => {
    setCountry({ ...country, Country: e.target.value });
  };
  const dispatch = useDispatch();
  return (
    <CityDiv>
      <input
        type="text"
        placeholder="Enter your Country Name"
        onChange={inputHandler}
      />
      <br />
      <button
        onClick={() => {
          dispatch(addCountry(country)).then((data) => alert("Country Added"));
        }}
      >
        Add Country
      </button>
    </CityDiv>
  );
};
