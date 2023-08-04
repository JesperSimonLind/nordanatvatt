import React from "react";
import Button from "@mui/material/Button";
import Reveal from "../Reveal/Reveal";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div
        className="app__header app__wrapper header__padding app__bg"
        id="hem"
      >
        <div className="app__wrapper_info">
          <Reveal>
            <h1 className="app__header-h1">Välkommen till Nordanå Tvätt</h1>
            <p className="p__opensans">Ditt lokala tvätteri sedan 1945</p>
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
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Header;
