function ValidateForm(){
    let nombre = document.getElementById('inputNombre').value;
    let posicion = document.getElementById('inputPosicion').value;
    let hs = document.getElementById('inputSencillos').value;
    let hd = document.getElementById('inputDobles').value;
    let ht = document.getElementById('inputTriples').value;
    let hr = document.getElementById('inputHr').value;
    let gp = document.getElementById('inputGp').value;

    if(nombre == ""){
        alert('El campo nombre no puede estar vacío');
        return false;
    }

    if(posicion == ""){
        alert('El campo posición no puede estar vacío');
        return false;
    }

    if(hs == ""){
        alert('El campo hits sencillos no puede estar vacío');
        return false;
    }

    if(hd == ""){
        alert('El campo hits dobles no puede estar vacío');
        return false;
    }

    if(ht == ""){
        alert('El campo hits triples no puede estar vacío');
        return false;
    }

    if(hr == ""){
        alert('El campo de home runs no puede estar vacío');
        return false;
    }

    if(gp == ""){
        alert('En caso de que el jugador sea pitcher, indicar si ganó o perdió el partido');
        return false;
    }

    return true;
}

function ReadData(){
    let listPeople;
    if(localStorage.getItem('listPeople') == null){
    listPeople =[];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    var html = "";

    listPeople.forEach(function (element, index) {
        
   html += "<tr>";
   html += "<td>"+ element.nombre + "</td>";
   html += "<td>"+ element.posicion + "</td>";
   html += "<td>"+ element.hs + "</td>";
   html += "<td>"+ element.hd + "</td>";
   html += "<td>"+ element.ht + "</td>";
   html += "<td>"+ element.hr + "</td>";
   html += "<td>"+ element.gp + "</td>";
   html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger"><span class="bi bi-trash"></span> Eliminar</button> <button onclick="editData('+ index +')" class="btn btn-warning"><span class="bi bi-pencil"></span> Editar</button></td>';

   html += "</tr>";

        
    });

    document.querySelector('#cuerpoTabla').innerHTML = html;
}

document.onload = ReadData();

function AddData(){
 if (ValidateForm() == true) {
    let nombre = document.getElementById('inputNombre').value;
    let posicion = document.getElementById('inputPosicion').value;
    let hs = document.getElementById('inputSencillos').value;
    let hd = document.getElementById('inputDobles').value;
    let ht = document.getElementById('inputTriples').value;
    let hr = document.getElementById('inputHr').value;
    let gp = document.getElementById('inputGp').value;
    
    var listPeople;
    if (localStorage.getItem('listPeople')== null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }
    listPeople.push({
    nombre: nombre,
    posicion: posicion,
    hs: hs,
    hd: hd,
    ht: ht,
    hr: hr,
    gp: gp

    });

    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    ReadData();
    document.getElementById('inputNombre').value = "";
    document.getElementById('inputNombre').value = "";
    document.getElementById('inputPosicion').value = "";
    document.getElementById('inputSencillos').value = "";
    document.getElementById('inputDobles').value = "";
    document.getElementById('inputTriples').value = "";
    document.getElementById('inputHr').value = "";
    document.getElementById('inputGp').value = "";

 }
}


function deleteData(index){
    let listPeople;
    if(localStorage.getItem('listPeople') == null){
    listPeople =[];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }
    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    ReadData();
}

function editData(index){
document.getElementById('Btn_guardar').style.display = 'none';
document.getElementById('Btn_actualizar').style.display ='block';



let listPeople;
if(localStorage.getItem('listPeople') == null){
listPeople =[];
}else{
    listPeople = JSON.parse(localStorage.getItem('listPeople'));
}
document.getElementById('inputNombre').value = listPeople[index].nombre;
document.getElementById('inputPosicion').value = listPeople[index].posicion;
document.getElementById('inputSencillos').value = listPeople[index].hs;
document.getElementById('inputDobles').value = listPeople[index].hd;
document.getElementById('inputTriples').value = listPeople[index].ht;
document.getElementById('inputHr').value = listPeople[index].hr;
document.getElementById('inputGp').value = listPeople[index].gp;

document.querySelector('#Btn_actualizar').onclick = function () {
 if (ValidateForm() == true ) {
    listPeople[index].nombre = document.getElementById('inputNombre').value;
    listPeople[index].posicion = document.getElementById('inputPosicion').value;
    listPeople[index].hs = document.getElementById('inputSencillos').value;
    listPeople[index].hd = document.getElementById('inputDobles').value;
    listPeople[index].ht = document.getElementById('inputTriples').value;
    listPeople[index].hr = document.getElementById('inputHr').value;
    listPeople[index].gp = document.getElementById('inputGp').value;

    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    ReadData();
    document.getElementById('inputNombre').value = "";
    document.getElementById('inputPosicion').value = "";
    document.getElementById('inputSencillos').value = "";
    document.getElementById('inputDobles').value = "";
    document.getElementById('inputTriples').value = "";
    document.getElementById('inputHr').value = "";
    document.getElementById('inputGp').value = "";

    document.getElementById('Btn_guardar').style.display = 'block';
    document.getElementById('Btn_actualizar').style.display = 'none';
    
 }   
};

}