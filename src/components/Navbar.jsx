import { Box, styled } from "@mui/material";
import React from "react";

export const Navbar = () => {
    
  return (
    <StyledNavbar component={"div"}>
      <NavbarContainer component={"div"}>
        <p>hello</p>
        <button>log out</button>
      </NavbarContainer>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Box)({
  backgroundColor: "red",
  padding: "20px 0px",
});

const NavbarContainer = styled(Box)({
  width: "80%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});
