// Su Js sukurti lentelės generavimo įrankį (panašiai, kaip Word). Kai vartotojas formoje įveda stulpleių ir eilučių  skaičių  
// sugeneruojama html lentelė.

document.querySelector("button").addEventListener("click", ()=>{
    event.preventDefault();
    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value;
    tableCreate(rows, columns);
})

function tableCreate(rows, columns) {
    const table = document.getElementById("table");
    tbl = document.createElement('table');
    for (let i = 0; i < rows; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < columns; j++) {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode("Laukelis"));
          td.style.border = '1px solid black';
        }
    }
    table.appendChild(tbl);
  }  

