
function addToTable() {

    
    let name = document.getElementById('name').value;
    let work = document.getElementById('work').value;
    let table = document.getElementById("myTable");

    let tableSize = table.rows.length; 
    let row = table.insertRow(tableSize); 
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    row.id = tableSize; 
   
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";
    
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = work;
    cell4.innerHTML = btnCode;

    
    document.getElementById('name').value = "";
    document.getElementById('work').value = "";

    
    return false;
}


function removeToTable(id){

    let row = id.parentNode.parentNode.id; 
    row = document.getElementById(row); 
    row.parentNode.removeChild(row);

    
    return false;
}