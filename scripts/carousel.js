let index = 0

const show_slide = (i) => {
    index += i

    const images = document.querySelectorAll('.slide')
    const dots = document.querySelectorAll('.dot')

    for(j = 0; j < images.length; j++){
        images[j].style.display = 'none'
    }

    for(j = 0; j < dots.length; j++){
        dots[j].classList.remove('active')
    }

    if(index > images.length - 1){
        index = 0
    }

    if(index < 0){
        index = images.length - 1
    }

    images[index].style.display = 'block'
    dots[index].classList.add('active')
}

window.onload = show_slide(index)