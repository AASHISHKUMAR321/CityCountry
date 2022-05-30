import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCity, addCountry, edit_city } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

const CityDiv = styled.div`
  input {
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
  }
`;

export const Edit = () => {
  const [country, setCountry] = useState({
    country: "",
    city: "",
    population: "",
  });
  const inputHandler = (e) => {
    setCountry({ ...country, [e.target.name]: e.target.value });
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          dispatch(edit_city({ country, id })).then(alert("edit Succesfull"));
          navigate("/");
        }}
      >
        Add City
      </button>
    </CityDiv>
  );
};
