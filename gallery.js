// Gallery js code 

document.addEventListener('DOMContentLoaded', function (event) {
    var glide = new Glide('.glide', {
        type: 'carousel',
        perView: 4,
        focusAt: 'center',
        breakpoints: { 
            800: {
                perView: 3
            },
            480: {
                perView: 2
            }
        }
    }) 
    glide.mount()
})



