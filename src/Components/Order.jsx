import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid, Typography } from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const columns = [
  { id: "prodname", label: "Product Name", minWidth: 170 },
  { id: "code", label: "Order Date", minWidth: 100 },
  {
    id: "population",
    label: "User ID",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size(in cartons)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Quantity",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(prodname, code, population, size) {
  const density = population / size;
  return { prodname, code, population, size, density };
}

const rows = [
  createData("UBolts", "20/10/2023", 1324171354, 12),
  createData("HexBolts", "20/10/2023", 1324171354, 22),
  createData("Washers", "20/10/2023", 1324171354, 200),
];

export default function Order() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowClick = (orderId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
    navigate(`/singleorder/${orderId}`);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [Productdetail, setProductdetail] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .get("http://localhost:3002/api/v1/orders/", { headers })
      .then((res) => {
        console.log(res.data.orders);
        setProductdetail(res.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <Grid container>
                <Grid item sm={2}>
                  <DeliveryDiningIcon sx={{ fontSize: 100 }} />
                </Grid>
                <Grid item sm={10}>
                  <Typography
                    variant="h2"
                    sx={{ alignItems: "center", textAlign: "center" }}
                  >
                    Orders
                  </Typography>
                </Grid>
              </Grid>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Productdetail.map((order, index) => {
              return (
                
                <TableRow key={order._id} onClick={() => handleRowClick(order._id)}> 
                  <TableCell>{order.orderItems[index].name}</TableCell>
                  <TableCell>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell sx={{ textAlign: "right" }}>
                    {order.userId}
                  </TableCell>
                  <TableCell sx={{ textAlign: "right" }}>
                    {order.orderItems[index].size}
                  </TableCell>
                  <TableCell sx={{ textAlign: "right" }}>
                    {order.orderItems[index].quantity}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>

          {/* <TableBody>
            {Productdetail.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody> */}
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
