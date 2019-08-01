
function validateReservation() {
    var arriveInput = document.getElementById("arriveInput").value;
    arriveInput = arriveInput.split('-');
    arriveInput = new Date(arriveInput[0], arriveInput[1], arriveInput[2]);
    arriveInput = arriveInput.getDate();

    var departureInput = document.getElementById("departureInput").value;
    console.log(departureInput);
    departureInput = departureInput.split('-');
    departureInput = new Date(departureInput[0], departureInput[1], departureInput[2]);
    departureInput = departureInput.getDate();

    var roomInput = document.getElementById("roomInput").value;

    var valueInput = JSON.parse(localStorage.getItem("valueInput"));

    if (!valueInput) {
        valueInput = [];
    }

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

        if (roomInput == roomType) {
            if ((arriveInput >= startDate && arriveInput <= endDate) || (departureInput >= startDate && departureInput <= endDate) ) {
                alert("The room is already booked! Please pick another date.");
                return false;
            }    
        }
    }
    return true;
};


