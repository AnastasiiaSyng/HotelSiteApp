document.addEventListener('DOMContentLoaded', function (event) {

    var valueInput = JSON.parse(localStorage.getItem("valueInput"));

    (function markOccupied() {

        for (var i = 0; i < valueInput.length; i++) {
            var arrive = valueInput[i].arrive;
            var departure = valueInput[i].departure;
            var roomType = valueInput[i].room;
        
            var startDate = arrive.split('-');
            startDate = new Date(startDate[0], startDate[1], startDate[2]);
            startDate = startDate.getDate();
            
            var endDate = departure.split('-');
            endDate = new Date(endDate[0], endDate[1], endDate[2]);
            endDate = endDate.getDate();
            
            function colorCells(rowElement, start, end, colour) {
                if (start > 0 && end <= rowElement.cells.length) { 
                    for (var i = start; i <= end; i++) {
                        rowElement.cells[i].style.backgroundColor = colour;
                    }
                } else {
                    throw "invalid parameter(s)!"
                } 
            }

            if (roomType == "single") { 
                colorCells(document.getElementById('single'), startDate, endDate, "red");
            } else if (roomType == "double") {
                colorCells(document.getElementById('double'), startDate, endDate, "green");
            } else {
                colorCells(document.getElementById('quadro'), startDate, endDate, "yellow");
            }
        }    
    })();
});