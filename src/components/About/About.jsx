import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import images from "../../constants/images";
import Grid from "@mui/material/Grid";

import "./About.css";
import Reveal from "../Reveal/Reveal";

const About = () => {
  return (
    <>
      <div className="about__wrapper about__padding" id="om">
        <Reveal>
          <h2 className="about__header">Om Nordanå Tvätt</h2>
        </Reveal>
        <Reveal>
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className="about__text">
                <p className="about__p" style={{ marginBottom: "65px" }}>
                  Nordanå Tvätt AB är beläget i Haninge, Stockholm, och erbjuder
                  ett komplett sortiment av tvätteritjänster åt företag, såväl
                  små som stora, och har så gjort sedan 1945. Och vi tar även
                  emot mattor från privatpersoner.Vi värdesätter en god service
                  och har därför många nöjda kunder - en del som vi tvättat åt i
                  mer än 45 år.
                </p>
                <p className="about__p">
                  Vi är ett något mindre tvätteri inom branschen och däri ligger
                  också vår styrka. Du kan som kund lita på att det är ordning
                  och reda på leveranserna och att du får en bra service.
                  Dessutom är vi flexibla och ställer alltid upp vid speciella
                  önskemål. Vi strävar efter att det ska vara så bekymmerslöst
                  som möjligt för er del.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="about__image">
                <img src={images.about} alt="En bild på ett tvätteri" />
              </div>
            </Grid>
          </Grid>
        </Reveal>
      </div>
    </>
  );
};

export default About;
