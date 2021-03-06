import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { AddCountry } from "./components/AddCountry";
import { AddCity } from "./components/AddCity";
import { Edit } from "./components/Edit";

const LinkDiv = styled.div`
  width: 30%;

  text-align: center;
  justify-content: center;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LinkDiv>
        <Link to={"/"}>Home</Link>
        <Link to={"/add-country"}>Add Country</Link>
        <Link to={"/add-city"}>Add City</Link>
      </LinkDiv>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<AddCountry />} />
        <Route path="/add-city" element={<AddCity />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
