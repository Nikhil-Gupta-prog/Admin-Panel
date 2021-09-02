import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./User.css";

const columns = [
  { field: "id", headerName: "ID", width: 110 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 80 },
  { id: 6, lastName: "Melisandre", firstName: null, age: 50 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function User() {
  return (
    <>
    <p className="UserComponent_heading">User Dashboard</p>
    <div
      style={{
        height: 440,
        width: "90%",
        "margin-top": "30px",
        "margin-left": "30px",
        "margin-bottom": "30px",
        "background":"fff",
        "zIndex":"0"

        

            
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </>
  );
}
export default User;
