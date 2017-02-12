//function to create table
function makeTable(){
	var body = document.body,
	newTable = document.createElement('table');

	newTable.setAttribute("id", "myTable");
	newTable.style.width = '600px';
	newTable.style.height = '600px';
	newTable.style.border = '1px  solid black';

	//Table header
	var tr = newTable.insertRow();
	for(var j=0; j<4; j++){
		//Make header cells
		var headerCell = document.createElement("TH");
		headerCell.appendChild(document.createTextNode("Header"+(j+1)))
		headerCell.style.border = '1px solid black';
		tr.appendChild(headerCell);
	}
	//make remaining rows. 3 high, 4 wide.
	//insert txt coordinate and color border
	for(var i = 0; i < 3; i++){
		var tr = newTable.insertRow();
		for(var j = 0; j < 4; j++){
			var newCell = tr.insertCell();
			newCell.appendChild(document.createTextNode((j+1)+','+(i+1)));
			newCell.style.border = '1px solid black';
		}
	}
	body.appendChild(newTable);
	var table = document.getElementById("myTable");
	//first cell of row one selected with thick border
	var row = 1;
	var cell = 0;
	table.rows[row].cells[cell].style.border = '4px solid black';

	//make up button
	var element = document.createElement("input");
	element.type = "button";
	element.value = "UP";

	//on click even for up button
	element.onclick = function(){
		var current = table.rows[row].cells[cell];
		if(row == 1){
			current=current; //if top stay top
		}
		else{
			table.rows[row].cells[cell].style.border = '1px solid black';
			row = row-1;
			current=table.rows[row].cells[cell];
			current.style.border = '4px solid black';
		}
	};

	body.appendChild(element);
	//make down button
	var element = document.createElement("input");
	element.type = "button";
	element.value = "DOWN";
	element.name = "Down";
	//on click event for down button
	element.onclick = function(){
		var current = table.rows[row].cells[cell];
		if(row == 3){
			current=current; //if bottom, go no further down
		}
		else{
			table.rows[row].cells[cell].style.border = '1px solid black';
			row = row+1;
			current = table.rows[row].cells[cell];
			current.style.border = '4px solid black';
		}
	};

	body.appendChild(element);
	//make left button
	var element = document.createElement("input");
	element.type = "button";
	element.value = "LEFT";
	element.name = "Left";

	//on click event for left button
	element.onclick = function(){
		var current = table.rows[row].cells[cell];
		if(cell == 0){
			current = current; // all the way left, go no further left
		}
		else{
			table.rows[row].cells[cell].style.border = '1px solid black';
			cell = cell-1;
			current = table.rows[row].cells[cell];
			current.style.border = '4px solid black';
		}
	};

	body.appendChild(element);
	//make right button
	var element = document.createElement("input");
	element.type = "button";
	element.value = "RIGHT";
	element.name = "Right";

	//on click event for right button
	element.onclick = function(){
		var current = table.rows[row].cells[cell];
		if(cell == 3){
			current = current; //all the way right, go no further right
		}
		else{
			table.rows[row].cells[cell].style.border = '1px solid black';
			cell = cell+1;
			current = table.rows[row].cells[cell];
			current.style.border = '4px solid black';
		}
	};

	body.appendChild(element);
	//make mark button
	var element = document.createElement("input");
	element.type = "button";
	element.value = "MARK / UNMARK CELL";
	element.id = "mark";


	//background to yellow and back
	element.onclick = function(){
		if ( table.rows[row].cells[cell].style.backgroundColor === ''){
			table.rows[row].cells[cell].style.backgroundColor = 'yellow';
		} else {
			table.rows[row].cells[cell].style.backgroundColor = '';
		}
	};

	body.appendChild(element);
}
window.onload=makeTable();