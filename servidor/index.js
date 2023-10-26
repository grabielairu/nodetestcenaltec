const conect = require("express");
const app = conect();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: [, "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

function autorizar(req, res, next) {
  const token = "1501.";
  const F1 = req.headers.authorization;
  if (F1 === token) {
    next();
  } else {
    res.send("No hay autorización");
  }
}

const final = [
  {
    clase: "guerrero",
    atributos: {
      fuerza: 15,
      destreza: 20,
      inteligenia: 10,
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
      inteligenia: 16,
      carisma: 20,
      suerte: 12,
    },
    Armas: ["baculo", "espada", "escudo"],
  },
];

const host = "localhost";
const Port = 3000;

app.get("/", autorizar, (req, res) => {
  res.json(final);
});

app.listen(Port, () => console.log("Escuchando en el puerto: " + Port));
