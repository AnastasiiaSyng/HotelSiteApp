document.addEventListener('DOMContentLoaded', function () { 
    document.getElementById('bookingForm').addEventListener('submit', saveBooking);
});

function showConfirmMessage(bookingDetails) {
    var bookingMessage = document.getElementById("bookingMessage");

    bookingMessage.innerHTML = `<div>
                                <p>Thank you ${bookingDetails.name}!<p> 
                                <p>Your Reservation Has Been Confirmed!<p/>
                                <p>Reservation details: check-in ${bookingDetails.arrive}, check-out
                                ${bookingDetails.departure}, room ${bookingDetails.room} for ${bookingDetails.people} person!</p>
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

    var arriveDate = bookingDetails.arrive.split('-');
    bookingDetails.arrive = new Date(arriveDate[0], arriveDate[1], arriveDate[2]);

    var departureDate = bookingDetails.departure.split('-');
    bookingDetails.departure = new Date(departureDate[0], departureDate[1], departureDate[2]);

    if (bookingValidation(bookingDetails)) {
        var valueInput = JSON.parse(localStorage.getItem('valueInput')); 
        
        if (!valueInput) {
            var valueInput = [];
        }

        valueInput.push(bookingDetails);
        localStorage.setItem('valueInput', JSON.stringify(valueInput));

        showConfirmMessage(bookingDetails);
        
        // TODO: reset form
        e.preventDefault();
    }
}
