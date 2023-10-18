import { useState } from "react";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const change = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/api/v1/contact/", formData)
      .then((res) => {
        console.log(res.data);
        alert("Message Sent Successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4" align="center" mb={2}>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056__340.jpg"
                      alt="Contact"
                      style={{ maxWidth: "100%" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={formData.name}
                    onChange={(e) => change(e, "name")}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={formData.email}
                    onChange={(e) => change(e, "email")}
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Enquiry / Message"
                    value={formData.message}
                    onChange={(e) => change(e, "message")}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
