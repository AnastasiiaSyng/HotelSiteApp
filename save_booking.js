document.addEventListener('DOMContentLoaded', function () { 
    document.getElementById('bookingForm').addEventListener('submit', saveBooking);
});

function formatDate(date) {

    var day = date.getDate();
    if (day < 10) day = '0' + day;
  
    var month = date.getMonth();
    if (month < 10) month = '0' + month;
  
    var year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;
  
    return day + '.' + month + '.' + year;
}
  
function showConfirmMessage(bookingDetails) {
    var bookingMessage = document.getElementById("bookingMessage");
    var startDate = formatDate(bookingDetails.arrive);
    var endDay = formatDate(bookingDetails.departure);


    bookingMessage.innerHTML = `<div>
                                    <p>Thank you ${bookingDetails.name}!<p> 
                                    <p>Your Reservation Has Been Confirmed!<p/>
                                    <p>Reservation details: check-in ${startDate}, check-out
                                    ${endDay}, room ${bookingDetails.room} for ${bookingDetails.people} person!</p>
                                </div>`;
};

function saveBooking (e) {
    reservationForm = document.getElementById("bookingForm").elements;
    
    var bookingDetails = {
        name: reservationForm["nameInput"].value,
        email: reservationForm["emailInput"].value,
        arrive: reservationForm["arriveInput"].value,
        departure: reservationForm["departureInput"].value,
        people: reservationForm["guests"].value,
        room: reservationForm["roomType"].value,
        needs: reservationForm["needsInput"].value,
    }

    if (!inputValidate(bookingDetails.name, "name") 
        || !inputValidate(bookingDetails.email, "email") 
        || !inputValidate(bookingDetails.arrive, "date") 
        || !inputValidate(bookingDetails.departure, "date")) {
        alert("invalid input parameters!");
        return false;
    }

    var arriveDate = bookingDetails.arrive.split('-');
    bookingDetails.arrive = new Date(arriveDate[0], arriveDate[1], arriveDate[2]);

    var departureDate = bookingDetails.departure.split('-');
    bookingDetails.departure = new Date(departureDate[0], departureDate[1], departureDate[2]);

    if (bookingValidation(bookingDetails)) {
        var bookingList = JSON.parse(localStorage.getItem('bookings')); 
        
        if (!bookingList) {
            var bookingList = [];
        }

        bookingList.push(bookingDetails);
        localStorage.setItem('bookings', JSON.stringify(bookingList));

        showConfirmMessage(bookingDetails);
        
        e.preventDefault();
    }
};
