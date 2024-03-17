const express = require('express')
const routeApp = express.Router()
const fetch = require("node-fetch");
const { isLoggedIn } = require('../middleware/auth');



routeApp.get("/", (req, res) => {
    res.render("login", { error: req.flash("error") });
  });
  
  routeApp.get("/register", (req, res) => {
    res.render("index");
  });
  
  routeApp.get("/feed", async (req, res) => {
    try {
      const response = await fetch("http://localhost:8000/v1/post/get");
      const posts = await response.json(); 
  
      res.render("feed", { posts });
    } catch (error) {
      res.status(500).send("Error fetching posts");
    }
  });
  
  routeApp.get("/profile", isLoggedIn, async (req, res) => {
    const data = await req.user.populate("posts");
    res.render("profile", { user: data });
  });


module.exports = routeApp