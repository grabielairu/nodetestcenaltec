var data;

function conex() {
  const api = "http://localhost:3000";
  // Solicitud GET (Request).
  fetch(api, {
    method: "GET",
    headers: {
      authorization: "1501.",
    },
  })
    .then((response) => response.json()) // convertir a json
    .then((json) => {
      console.log(json);
      data = json;
    });
}

function Show() {
  var main = document.getElementById("data");
  main.innerHTML = data.id;
}
