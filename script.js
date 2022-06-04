const tbody = document.querySelector("tbody");
const url = "https://cicourse.herokuapp.com/students";

fetch(url)
  .then((response) => response.json())
  .then((students) => {
    students.forEach((student) => {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      const text = document.createTextNode(student);
      td.appendChild(text);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
