// Gallery js code 
// поскольку скрипт занружаеться первым навешено событие для загружбы дом

document.addEventListener('DOMContentLoaded', function (event) {
    var glide = new Glide('.glide', {
        type: 'carousel',
        perView: 4,
        focusAt: 'center',
        breakpoints: { 
            800: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    }) 
    glide.mount()
})



