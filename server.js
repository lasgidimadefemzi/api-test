const express = require("express");
const app = express();

const PORT = 8000;
const Rappers = {
  "21 savage": {
    name: "Shéyaa Bin Abraham-Joseph",
    placeBirth: "London",
    age: 30,
  },
  "pop smoke": {
    name: "Bashar Barakah Jackson",
    placeBirth: "Brooklyn, New York City",
    age: 24,
  },
  "young thug": {
    name: "Jeffery Lamar Williams",
    placeBirth: "Atlanta, Georgia,",
    age: 0,
  },
  "lil baby": {
    name: "Dominique Armani Jones",
    placeBirth: "Atlanta, Georgia",
    age: 28,
  },
  unknown: {
    name: "NA",
    placeBirth: "NA",
    age: "NA",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if (Rappers[rapperName]) {
    res.json(Rappers[rapperName].name);
  } else {
    res.json(Rappers["unknown"].name);
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on port : ${PORT}`);
});
