// const express = require("express");
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

const port = app.listen(process.env.PORT || 5000);
const server = http.createServer(app);

mongoose
  .connect(process.env.MONDODB_URL)
  .then(() => {
    console.log("connected");
    server.listen(port, () => {
      console.log(`server connected to ${port}`);
    });
  })
  .catch((err) => {
    console.log(`error ${err}`);
    process.exit(1);
  });
