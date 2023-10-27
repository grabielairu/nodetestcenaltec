var data;

function conex() {
  const api = "http://localhost:3000";
  // Solicitud GET (Request).
  fetch(api, {
    method: "GET",
  })
    .then((response) => response.json()) // convertir a json
    .then((json) => {
      console.log(json);
      data = json;
      updateClases();
    });
}

function updateClases() {
  const select = document.getElementById("clase");
  data.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.text = item.clase;
    select.appendChild(option);
  });
}

function updateAtributos() {
  const select = document.getElementById("clase");
  const atributosDiv = document.getElementById("atributos");
  const armasSelect = document.getElementById("armas");
  const clase = data[select.value];

  // Limpiar los atributos y las armas anteriores
  atributosDiv.innerHTML = "";
  armasSelect.innerHTML = "";

  // Mostrar los atributos
  for (const atributo in clase.atributos) {
    const p = document.createElement("p");
    p.textContent = `${atributo}: ${clase.atributos[atributo]}`;
    atributosDiv.appendChild(p);
  }

  // Mostrar las armas
  clase.armas.forEach((arma) => {
    const option = document.createElement("option");
    option.value = arma;
    option.text = arma;
    armasSelect.appendChild(option);
  });
}
