// Booking js code / 
// push to local storage 

document.addEventListener('DOMContentLoaded', function () { 
    document.getElementById('inputForm').addEventListener('submit', saveInputForm);

    function saveInputForm (e) {
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
        if (localStorage.getItem('valueInput') === null) {
            var valueInput = [];
            valueInput.push(valueInputs);
            localStorage.setItem('valueInput', JSON.stringify(valueInput));
        } else {
            var valueInput = JSON.parse(localStorage.getItem('valueInput'));
            valueInput.push(valueInputs);
            localStorage.setItem('valueInput', JSON.stringify(valueInput));
        }
          
        document.getElementById('inputForm').reset();
        
        fetchInput();
        
        e.preventDefault(); 
    }
})

// confirmation 

function fetchInput () {
    var valueInput = JSON.parse(localStorage.getItem("valueInput"))
    var bookingList = document.getElementById("bookingList")

    bookingList.innerHTML = '';

    for (var i = 0; i < valueInput.length; i++) {
        var name = valueInput[i].name;
        // var email = valueInput[i].email;
        var arrive = valueInput[i].arrive;
        var departure = valueInput[i].departure;
        var people = valueInput[i].people;
        var room = valueInput[i].room;
        // var needs = valueInput[i].needs;
    } 

    bookingList.innerHTML += '<div class="well">'+
    '<p>Thank you ' + name + '!<p>' +
    '<p>Your Reservation Has Been Confirmed!<p/>'+
    '<p>Reservation details: check-in ' + arrive + ', check-out ' + departure + ',  room ' + room + ' for ' + people + ' person! </p>'
    '</div>';

};