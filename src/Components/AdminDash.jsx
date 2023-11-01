import React, { useState } from "react";
import "./AdminDash.css";
import { Grid } from "@mui/material";
import AddProduct from "./AddProduct";
import Order from "./Order";
import Dashboard from "./Dashboard";

const AdminDash = () => {
  const tabs = ["Dashboard", "Add Product", "Orders", "Products View"];
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Mapping between tab names and corresponding components
  const tabComponents = {
    Dashboard: DashboardComponent,
    "Add Product": AddProductComponent,
    Orders: OrdersComponent,
    "Products View": ProductsViewComponent,
  };

  const ActiveComponent = tabComponents[activeTab];

  return (
    <>
      <Grid container>
        <Grid item sm={2}>
          <div className="sidebar">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`sidebar-item ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </Grid>
        <Grid item sm={10}>
          <div className="app">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="content">
              {ActiveComponent ? (
                <ActiveComponent />
              ) : (
                <p>Component Not Found</p>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

// Define your components (replace these with your actual component implementations)
const DashboardComponent = () => (
  <div>
    <Dashboard />
  </div>
);
const AddProductComponent = () => (
  <div>
    <AddProduct />
  </div>
);
const OrdersComponent = () => (
  <div>
    <Order />
  </div>
);
const ProductsViewComponent = () => <div>Products View Component</div>;

const Sidebar = ({ activeTab, setActiveTab }) => {
  // Sidebar component code
  return null;
};

export default AdminDash;
