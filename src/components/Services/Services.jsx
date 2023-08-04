import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import images from "../../constants/images";
import { motion } from "framer-motion";

import "./Services.css";
import Reveal from "../Reveal/Reveal";

const Services = () => {
  return (
    <>
      <div className="services__wrapper section__padding" id="tjanster">
        <Reveal>
          <h2 className="services__header ">Våra Tjänster</h2>
        </Reveal>
        <Reveal>
          <Stack
            sx={{
              marginTop: "32px",
              flexFlow: "row wrap",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "250px;",
                marginTop: "32px",
              }}
            >
              <img className="button-grow" src={images.arbetsklader}></img>
              <p className="service__title">Arbetskläder</p>
              <p className="service__p">
                Varselplagg, overaller, byxor, tröjor m.m. och lagning av
                arbetskläder.
              </p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "250px;",
                marginTop: "32px",
              }}
            >
              <img className="button-grow" src={images.diverse}></img>
              <p className="service__title">Diverse</p>
              <p className="service__p">Filtar, kuddar, täcken m.m.</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "250px;",
                marginTop: "32px",
              }}
            >
              <img className="button-grow" src={images.skurmoppar}></img>
              <p className="service__title">Skurmoppar</p>
              <p className="service__p">Tvättning av skurmoppar</p>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "250px;",
                marginTop: "32px",
              }}
            >
              <img className="button-grow" src={images.vittvatt}></img>
              <p className="service__title">Vittvätt</p>
              <p className="service__p">Mangling av dukar, sängkläder m.m.</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "250px;",
                marginTop: "32px",
              }}
            >
              <img className="button-grow" src={images.mattor}></img>
              <p className="service__title">Mattor</p>
              <p className="service__p">
                Entrémattor och övriga mattor. Vi tvättar bl.a. åt privata och
                kommunala förskolor runt om i Stockholm. Uthyrning & försäljning
                av entrémattor finns även
              </p>
            </Box>
          </Stack>
        </Reveal>
      </div>
    </>
  );
};

export default Services;
