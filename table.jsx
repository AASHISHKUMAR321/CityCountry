import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "country", headerName: "Country", width: 200 },
  { field: "city", headerName: "City", width: 200 },
  {
    field: "population",
    headerName: "Population",
    type: "number",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,

    valueGetter: (params) =>
      `${params.row.country || ""} ${params.row.city || ""}`,
  },
  {
    field: "Edit",
    headerName: "Full name",
  },
  {
    field: "name",

    headerName: "Delete",
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const data = useSelector((Store) => Store.data);
  //   console.log(data[0], rows);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={data ? data[0] : ""}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        pagination={[8]}
      />
    </div>
  );
};
