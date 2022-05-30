import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_Data, getData, sort } from "../redux/actions";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  width: 100%;
  table {
    margin: auto;
    padding: 10px;
  }
  .body {
    color: green;
    padding: 10px;
  }
`;

export const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getData());
  }, []);

  const data = useSelector((Store) => Store.data);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSort = (e) => {
    dispatch(sort(e.target.value));
  };
  //   console.log(data[0], rows);
  const navigate = useNavigate();

  return (
    <Div>
      <div>
        <span>Filter</span>
        <input type="text" placeholder="search here" onChange={handleSearch} />
        <span>Sort</span>
        <select name="" id="" onChange={handleSort}>
          <option value="">----</option>
          <option value="population">asc</option>
          <option value="population">desc</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>country</th>
            <th>city</th>
            <th>populaction</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {data
          ? data
              .filter((data) => data.country.includes(search))
              .map((e) => {
                return (
                  <tbody className="body">
                    <tr>
                      <td>{e.id}</td>
                      <td>{e.country}</td>
                      <td>{e.city}</td>
                      <td>{e.population}</td>
                      <td>
                        <button
                          onClick={() => {
                            navigate(`/edit/${e.id}`);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            dispatch(delete_Data(e.id));
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })
          : ""}
      </table>
    </Div>
  );
};
