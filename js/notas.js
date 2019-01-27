var formulario = document.querySelector("#Formu");

formulario.addEventListener("submit", function() {

    var titulo = document.querySelector("#titulo").value;
    var texto = document.querySelector("#texto").value;
    var etiqueta = document.querySelector("#etiqueta".value);

    var nota = {
        Titulo: titulo,
        Contenido: texto,
        Etiqueta: etiqueta
    }

    localStorage.setItem(titulo, JSON.stringify(nota));
    //console.log("Ha llegado aquí");

})

var row = document.querySelector("#roow");
for (var i in localStorage) {
    if (typeof localStorage[i] == 'string') {
        var div = document.createElement("div");
        div.className = "alert alert-success alert-dismissible tamPosit";

        var json = JSON.parse(localStorage[i]);

        var plantilla = `
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <h1>${json.Titulo}</h1>
            ${json.Contenido}
        `;

        div.innerHTML = plantilla;
        row.append(div);
    }

}