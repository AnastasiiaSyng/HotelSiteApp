function bookingValidation(newBookingDetails) {
    var bookingList = JSON.parse(localStorage.getItem("bookings"));

    if (!bookingList) {
        bookingList = [];
    }

    var newBookingArriveDay = newBookingDetails.arrive.getDate();
    var newBookingDepartureDay = newBookingDetails.departure.getDate();

    for (var i = 0; i < bookingList.length; i++) {
        if (newBookingDetails.room == bookingList[i].room) {
            var bookingArriveDay = new Date(bookingList[i].arrive).getDate();
            var bookingDepartureDay = new Date(bookingList[i].departure).getDate();
            
            if ((newBookingArriveDay >= bookingArriveDay && newBookingArriveDay <= bookingDepartureDay) || 
                (newBookingDepartureDay >= bookingArriveDay && newBookingDepartureDay <= bookingDepartureDay)) {
                alert("The room is already booked! Please pick another date.");
                return false;
            }    
        }
    }
    return true;
};


