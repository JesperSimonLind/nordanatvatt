import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Reveal from "../Reveal/Reveal";

import "./Header.css";

import images from "../../constants/images";

const Header = () => {
  return (
    <>
      <Box
        className="app__header app__wrapper header__padding app__bg"
        id="hem"
        sx={{
          backgroundColor: "var(--color-darkPurple)",
          backgroundImage: `url(${images.hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          minHeight: "100vh",
        }}
      >
        <div className="app__wrapper_info">
          <Reveal>
            <h1 className="app__header-h1">Välkommen till Nordanå Tvätt</h1>
            <p className="p__opensans">Ditt lokala tvätteri sedan 1945</p>
            <a href="#kontakt">
              <Button
                className="header__button"
                variant="contained"
                size="large"
                sx={{
                  marginTop: "16px",
                  fontFamily: "var(--font-base)",
                  backgroundColor: "var(--color-lightBlue)",
                  fontWeight: 600,
                  ":hover": {
                    bgcolor: "#00A99F",
                  },
                }}
              >
                Kontakta oss
              </Button>
            </a>
          </Reveal>
        </div>
      </Box>
    </>
  );
};

export default Header;
