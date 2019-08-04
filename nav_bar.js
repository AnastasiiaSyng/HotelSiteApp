document.addEventListener('DOMContentLoaded', navBar);

function navBar(event) {
    var navBarHtml = `<div class="container">
                        <ul class="navbar__menu">
                            <li class="navbar navbar__nemu__border"><a href="index.html#about">About</a></li> 
                            <li class="navbar navbar__nemu__border"><a href="bookings.html">All bookings</a></li> 
                            <li class="navbar navbar__nemu__border"><a href="services.html">Services</a></li> 
                            <li class="navbar navbar__nemu__border"><a href="booking.html">Booking</a></li> 
                            <li ><a href="#contact">Contact</a>
                                <ul class="submenu navbar__submenu">
                                    <li><a href="index.html#registration">Get in touch</a></li>
                                    <li><a href="index.html#address">Address</a></li>
                                </ul>
                            </li> 
                        </ul>
                    </div>`;

    document.getElementById("navbar").innerHTML = navBarHtml;
}
