// Booking js code / 
// push to local storage 
document.addEventListener('DOMContentLoaded', function () { 
    document.getElementById('inputForm').addEventListener('submit', saveBookingToLocalS);

    function saveBookingToLocalS (e) {
    
        var nameInput = document.getElementById("nameInput").value;
        var emailInput = document.getElementById("emailInput").value;
        var arriveInput = document.getElementById("arriveInput").value;
        var departureInput = document.getElementById("departureInput").value;
        var peopleInput = document.getElementById("peopleInput").value;
        var roomInput = document.getElementById("roomInput").value;
        var needsInput = document.getElementById("needsInput").value;

        var valueInputs = {
            name: nameInput,
            email: emailInput,
            arrive: arriveInput,
            departure: departureInput,
            people: peopleInput,
            room: roomInput,
            needs: needsInput,
        }

        var valid = new Validator();
        valid.validate(nameInput, "name");

        console.log(valid.validate(nameInput, "name"))

        if (validateReservation()) {
            if (localStorage.getItem('valueInput') === null) {
                var valueInput = [];
                valueInput.push(valueInputs);
                localStorage.setItem('valueInput', JSON.stringify(valueInput));
            } else {
                var valueInput = JSON.parse(localStorage.getItem('valueInput'));
                valueInput.push(valueInputs);
                localStorage.setItem('valueInput', JSON.stringify(valueInput));
            }
            // document.getElementById('inputForm').reset();
            confirmMessage();
            e.preventDefault(); 
        }
    }
})

// confirmation window

function confirmMessage() {
    var valueInput = JSON.parse(localStorage.getItem("valueInput"))
    var bookingList = document.getElementById("bookingList")

    bookingList.innerHTML = '';

    for (var i = 0; i < valueInput.length; i++) {
        var name = valueInput[i].name;
        var arrive = valueInput[i].arrive;
        var departure = valueInput[i].departure;
        var people = valueInput[i].people;
        var room = valueInput[i].room;
    } 

    bookingList.innerHTML += '<div class="well">'+
    '<p>Thank you ' + name + '!<p>' +
    '<p>Your Reservation Has Been Confirmed!<p/>'+
    '<p>Reservation details: check-in ' + arrive + ', check-out ' + departure + ',  room ' + room + ' for ' + people + ' person! </p>'
    '</div>';

};