import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCity, addCountry } from "../redux/actions";

const CityDiv = styled.div`
  input {
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
  }
`;

export const AddCity = () => {
  const [country, setCountry] = useState({
    country: "",
    city: "",
    population: "",
  });
  const inputHandler = (e) => {
    setCountry({ ...country, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  return (
    <CityDiv>
      <input
        type="text"
        placeholder="Enter your Country Name"
        name="country"
        onChange={inputHandler}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your City Name"
        name="city"
        onChange={inputHandler}
      />
      <br />
      <input
        type="number"
        placeholder="Enter your population"
        name="population"
        onChange={inputHandler}
      />
      <br />
      <button
        onClick={() => {
          dispatch(addCity(country));
        }}
      >
        Add City
      </button>
    </CityDiv>
  );
};
