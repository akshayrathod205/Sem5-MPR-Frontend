// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import { styled } from "@mui/material/styles";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setLogout } from "../state/appStates";

// const pages = ["Home", "About Us", "Products", "Contact Us"];
// const settings = ["Profile", "Logout"];

// const Navbar = (props) => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleClick = (setting) => {
//     if (setting === "Logout") {
//       localStorage.removeItem("token");
//       dispatch(setLogout());
//       navigate("/");
//     } else if (setting === "Profile") {
//       navigate("/profile");
//     }
//   };

//   const handlePageClick = (page) => {
//     if (page === "Home") {
//       navigate("/");
//     } else if (page === "About Us") {
//       navigate("/about");
//     } else if (page === "Products") {
//       navigate("/products");
//     } else if (page === "Contact Us") {
//       navigate("/contact");
//     }
//   };

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const [style, setstyle] = useState({
//     backgroundColor: "#172c6f",
//     color: "white",
//   });
//   const [isBlackMode, setIsBlackMode] = useState(false);

//   return (
//     <AppBar position="relative" style={style}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             FIT RIGHT
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page}>
//                   <Typography
//                     textAlign="center"
//                     onClick={() => handlePageClick(page)}
//                   >
//                     {page}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             FIT RIGHT
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 sx={{ my: 2, color: "white", display: "block" }}
//                 onClick={() => handlePageClick(page)}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mx: 2 }}>
//                 <Avatar alt="Icon Button" src={IconButton} />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "5px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu} // Close the menu without redirecting if no option is selected
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={() => handleClick(setting)}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../state/appStates";

const pages = ["Home", "About Us", "Products", "Contact Us"];
const settings = ["Profile", "Logout"];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Check if the user is logged in (you can use your own logic)
  const isUserLoggedIn = !!localStorage.getItem("token");

  const handleClick = (setting) => {
    if (setting === "Logout") {
      localStorage.removeItem("token");
      dispatch(setLogout());
      navigate("/");
    } else if (setting === "Profile") {
      navigate("/profile");
    }
  };

  const handlePageClick = (page) => {
    if (page === "Home") {
      navigate("/");
    } else if (page === "About Us") {
      navigate("/about");
    } else if (page === "Products") {
      navigate("/products");
    } else if (page === "Contact Us") {
      navigate("/contact");
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [style, setstyle] = useState({
    backgroundColor: "#172c6f",
    color: "white",
  });
  const [isBlackMode, setIsBlackMode] = useState(false);

  return (
    <AppBar position="relative" style={style}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FIT RIGHT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography
                    textAlign="center"
                    onClick={() => handlePageClick(page)}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FIT RIGHT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {isUserLoggedIn ? (
              // If user is logged in, show the Profile icon
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mx: 2 }}>
                  <Avatar alt="Icon Button" src={IconButton} />
                </IconButton>
              </Tooltip>
            ) : (
              // If user is not logged in, show "Admin Login" and "User Login" buttons
              <div style={{ display: "flex" }}>
                <Button
                  sx={{
                    my: 2,
                    display: "block",
                    padding: "10px",
                    backgroundColor: "#f1f1f1",
                    margin: "0px 10px",
                    borderRadius: "5px",
                    color: "#162D6Fff",
                    "&:hover": { backgroundColor: "#ccc" },
                  }}
                  onClick={() => navigate("/admin")}
                >
                  Admin Login
                </Button>
                <Button
                  sx={{
                    my: 2,
                    display: "block",
                    padding: "10px",
                    backgroundColor: "#f1f1f1",
                    margin: "0px 10px",
                    borderRadius: "5px",
                    color: "#162D6Fff",
                    "&:hover": { backgroundColor: "#ccc" },
                  }}
                  onClick={() => navigate("/login")}
                >
                  User Login
                </Button>
              </div>
            )}
            <Menu
              sx={{ mt: "5px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isUserLoggedIn ? (
                // If user is logged in, show "Profile" option
                <MenuItem key="Profile" onClick={() => handleClick("Profile")}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              ) : // If user is not logged in, don't show "Profile" option
              null}
              <MenuItem key="Logout" onClick={() => handleClick("Logout")}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
