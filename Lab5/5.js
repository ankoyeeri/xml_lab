
function processFiles(input) {
    let file = input.files[0];
    let reader = new FileReader();

    reader.onload = function () {
        let parser = new DOMParser();
        let xmlDOC = parser.parseFromString(reader.result, "text/xml");

        let surname = xmlDOC.getElementsByTagName("surname")[0].innerHTML;
        let name = xmlDOC.getElementsByTagName("name")[0].innerHTML;
        let patronymic = xmlDOC.getElementsByTagName("patronymic")[0].innerHTML;
        let mark = xmlDOC.getElementsByTagName("mark")[0].innerHTML;
        let year = xmlDOC.getElementsByTagName("year")[0].innerHTML;

        let outputJS = document.getElementById("outputJs");
        outputJS.innerHTML += "<p>";
        outputJS.innerHTML += "Фамилия: " + surname + "</br>";
        outputJS.innerHTML += "Имя: " + name + "</br>";
        outputJS.innerHTML += "Отчество: " + patronymic + "</br>";
        outputJS.innerHTML += "Проходной балл: " + mark + "</br>";
        outputJS.innerHTML += "Год рождения: " + year + "</br>";
        outputJS.innerHTML += "</p>";
    }
    reader.readAsText(file);
    reader.onerror = function () {
        alert(reader.error);
    }
}