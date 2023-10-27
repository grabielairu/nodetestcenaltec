const conect = require("express");
const app = conect();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

const final = [
  {
    clase: "guerrero",
    atributos: {
      fuerza: 15,
      destreza: 20,
      inteligencia: 10,
      carisma: 13,
      suerte: 8,
    },
    armas: ["hacha", "espada", "escudo"],
  },
  {
    clase: "paladin",
    atributos: {
      fuerza: 14,
      destreza: 15,
      inteligencia: 16,
      carisma: 20,
      suerte: 12,
    },
    armas: ["baculo", "espada", "escudo"],
  },
  {
    clase: "mago",
    atributos: {
      fuerza: 8,
      destreza: 10,
      inteligencia: 20,
      carisma: 15,
      suerte: 12,
    },
    armas: ["varita", "libro de hechizos"],
  },
];

const Port = 3000;

app.get("/", (req, res) => {
  res.json(final);
});

app.listen(Port, () => console.log("Escuchando en el puerto: " + Port));
