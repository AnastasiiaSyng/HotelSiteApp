document.addEventListener('DOMContentLoaded', function (event) {

var valueInput = JSON.parse(localStorage.getItem("valueInput"));

for (var i = 0; i < valueInput.length; i++) {
    var arrive = valueInput[i].arrive;
    var departure = valueInput[i].departure;
    var room = valueInput[i].room;
} 

startDate = arrive.split('-');
startDate = new Date(startDate[0], startDate[1], startDate[2]);
var startD = startDate.getDate();

endDay = departure.split('-');
endDay = new Date(endDay[0], endDay[1], endDay[2]);
var endD = endDay.getDate();


tableRowForSingle = document.getElementById('single');
tableRowForDouble = document.getElementById('double');
tableRowForQuadro = document.getElementById('quadro');

var i = startD;
var j = endD;
var z = tableRowForSingle.cells.length;
var z = j;

function markOccupied() {
    if (room == "single") { 
        for ( i, z ; i <= z; i++) {
            tableRowForSingle.cells[i].style.backgroundColor = 'red';
        }
    } else if (room == "double") {
        for ( i, z ; i <= z; i++) {
            tableRowForDouble.cells[i].style.backgroundColor = 'green';
        }
    } else {
        for ( i, z ; i <= z; i++) {
            tableRowForQuadro.cells[i].style.backgroundColor = 'yellow';
        }
    }
}
markOccupied(); 

});