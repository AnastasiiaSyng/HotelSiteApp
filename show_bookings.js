document.addEventListener('DOMContentLoaded', showBookings);

function colorCells(rowElement, start, end, colour) {
    if (start > 0 && end <= rowElement.cells.length) { 
        for (var i = start; i <= end; i++) {
            rowElement.cells[i].style.backgroundColor = colour;
        }
    } else {
        throw "invalid parameter(s)!"
    } 
};

function showBookings() {
    var bookingList = JSON.parse(localStorage.getItem("bookings"));

    for (var i = 0; i < bookingList.length; i++) {
        var roomType = bookingList[i].room;

        var startDate = new Date(bookingList[i].arrive);
        startDate = startDate.getDate();
        
        var endDate = new Date(bookingList[i].departure);
        endDate = endDate.getDate();

        if (roomType == "single") { 
            colorCells(document.getElementById('single'), startDate, endDate, "red");
        } else if (roomType == "double") {
            colorCells(document.getElementById('double'), startDate, endDate, "green");
        } else {
            colorCells(document.getElementById('quadro'), startDate, endDate, "yellow");
        }
    }    
};